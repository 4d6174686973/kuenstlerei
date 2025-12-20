"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import CardItem from "@/components/CardItem";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function NeuigkeitenClient({ initialData }: { initialData: any[] }) {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  const [selectedKat, setSelectedKat] = useState<string | null>(null);
  const [selectedRef, setSelectedRef] = useState<string>("all"); // Filter for Projekt/Kurs

  // 1. Extract unique Categories
  const categories = useMemo(() => {
    const allKats = initialData.flatMap((n) => n.kategorien || []);
    return Array.from(new Set(allKats));
  }, [initialData]);

  // 2. Extract unique References (Projects/Courses)
  const references = useMemo(() => {
    const refs = initialData
      .filter(item => item.verbindungName)
      .map(item => ({ name: item.verbindungName, id: item.verbindungName }));
    
    // Remove duplicates by name
    return Array.from(new Map(refs.map(obj => [obj.name, obj])).values());
  }, [initialData]);

  // 3. Filter Logic
  const filteredData = useMemo(() => {
    const today = new Date().toISOString().split("T")[0];

    return initialData.filter((item) => {
      const matchesSearch = 
        item.titel.toLowerCase().includes(search.toLowerCase()) ||
        item.beschreibung?.toLowerCase().includes(search.toLowerCase());
      
      const matchesDate = 
        filter === "all" ? true :
        filter === "future" ? (item.eventDate && item.eventDate >= today) :
        filter === "past" ? (item.eventDate && item.eventDate < today) : true;

      const matchesKat = !selectedKat || item.kategorien?.includes(selectedKat);
      
      const matchesRef = selectedRef === "all" || item.verbindungName === selectedRef;

      return matchesSearch && matchesDate && matchesKat && matchesRef;
    });
  }, [search, filter, selectedKat, selectedRef, initialData]);

  return (
    <div className="flex flex-col md:flex-row gap-12">
      {/* SIDEBAR */}
      <aside className="w-full md:w-64 space-y-8 h-fit md:sticky md:top-8">

        {/* Search */}
        <div className="space-y-2">
          <Label className="font-bold uppercase tracking-wider text-[10px] text-gray-400">Suche</Label>
          <Input 
            placeholder="Titel oder Inhalt..." 
            value={search} 
            onChange={(e) => setSearch(e.target.value)} 
            className="rounded-none border-gray-200 focus-visible:ring-gray-400"
          />
        </div>

        {/* Reference Filter (Projekt/Kurs) */}
        <div className="space-y-2">
          <Label className="font-bold uppercase tracking-wider text-[10px] text-gray-400">Bezug zu Projekt/Kurs</Label>
          <Select value={selectedRef} onValueChange={setSelectedRef}>
            <SelectTrigger className="rounded-none border-gray-200">
              <SelectValue placeholder="Alle Bezüge" />
            </SelectTrigger>
            <SelectContent className="rounded-none">
              <SelectItem value="all">Alle anzeigen</SelectItem>
              {references.map((ref) => (
                <SelectItem key={ref.id} value={ref.id}>{ref.name}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Date Filter */}
        <div className="space-y-4">
          <Label className="font-bold uppercase tracking-wider text-[10px] text-gray-400">Events</Label>
          
          <RadioGroup 
            value={filter}
            onValueChange={setFilter} 
            className="flex flex-col space-y-2"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="all" id="all" />
              <Label htmlFor="all" className="font-normal cursor-pointer text-sm">Alles</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="future" id="future" />
              <Label htmlFor="future" className="font-normal cursor-pointer text-sm">Zukünftige Events</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="past" id="past" />
              <Label htmlFor="past" className="font-normal cursor-pointer text-sm">Bisherige Events</Label>
            </div>
          </RadioGroup>
        </div>

        {/* Category Filter */}
        <div className="space-y-2">
          <Label className="font-bold uppercase tracking-wider text-[10px] text-gray-400">Kategorien</Label>
          <div className="flex flex-wrap gap-2">
            <Button 
              variant={selectedKat === null ? "default" : "outline"} 
              size="sm" onClick={() => setSelectedKat(null)}
              className="rounded-none text-[11px] h-7 px-2 uppercase tracking-tight"
            >
              Alle
            </Button>
            {categories.map(kat => (
              <Button 
                key={kat} 
                variant={selectedKat === kat ? "default" : "outline"}
                size="sm" onClick={() => setSelectedKat(kat)}
                className="rounded-none text-[11px] h-7 px-2 uppercase tracking-tight"
              >
                {kat}
              </Button>
            ))}
          </div>
        </div>

        {/* Deleta all filters */}
        {(search || filter !== "all" || selectedKat || selectedRef !== "all") && (
          <Button 
            variant="link" 
            size="sm" 
            className="h-auto p-0 text-[10px] text-red-400 uppercase tracking-widest mb-4"
            onClick={() => {
              setSearch("");
              setFilter("all");
              setSelectedKat(null);
              setSelectedRef("all");
            }}
          >
            ✕ Filter löschen
          </Button>
        )}

      </aside>

      {/* LIST */}
      <div className="flex-1 space-y-8">
        {filteredData.length > 0 ? (
          filteredData.map((item) => {
             // ... dynamic badges logic remains the same as previous step
             const badges = (item.kategorien || []).map((k: string) => ({
              text: k,
              className: "bg-slate-100 text-slate-600 hover:bg-slate-100"
            }));
            if (item.eventDate) {
              badges.push({
                text: `Event: ${new Date(item.eventDate).toLocaleDateString("de-DE")}`,
                className: "bg-amber-100 text-amber-700 border-none font-bold"
              });
            }
            if (item.verbindungName) {
              badges.push({
                text: item.verbindungName,
                className: "bg-blue-50 text-blue-600 border-none italic"
              });
            }

            return (
              <Link key={item._id} href={`/neu/${item.slug}`} className="block hover:opacity-90 transition">
                <CardItem
                  title={item.titel}
                  subtitle={`Gepostet am ${new Date(item.publishDate).toLocaleDateString("de-DE")}`}
                  imageUrl={item.image}
                  badges={badges}
                />
              </Link>
            );
          })
        ) : (
          <div className="py-20 text-center border-2 border-dashed border-gray-100">
            <p className="text-gray-400 italic mb-4">Keine Treffer für diese Filterkombination.</p>
            <Button 
              variant="outline" 
              className="rounded-none"
              onClick={() => {
                setSearch("");           // Suchfeld leeren
                setFilter("all");        // Radio-Buttons auf "Alle Beiträge" zurücksetzen
                setSelectedKat(null);    // Kategorie-Filter entfernen
                setSelectedRef("all");   // Projekt/Kurs-Selektor zurücksetzen
              }}
            >
              Alle Filter zurücksetzen
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}