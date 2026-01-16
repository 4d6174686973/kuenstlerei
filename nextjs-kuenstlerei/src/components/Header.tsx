"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import { useState } from "react";
import { 
  Sheet, 
  SheetContent, 
  SheetTrigger,
  SheetTitle,
  SheetHeader,
  SheetDescription
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { NAV_LINKS } from "@/lib/constants";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b sticky top-0 bg-white z-50">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="font-bold text-lg tracking-tight uppercase">
          <Image
            src="/logo.png"
            alt="Kunstakademie Würselen Logo"
            width={120}
            height={40}
          />  
        </Link>

        {/* DESKTOP NAV - hidden on mobile */}
        <nav className="hidden md:flex gap-8 text-[12px] uppercase tracking-widest font-medium">
          {NAV_LINKS.map((link) => (
            <Link 
              key={link.href} 
              href={link.href} 
              className="hover:text-slate-500 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* MOBILE NAV - visible only on mobile */}
        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="h-10 w-10">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Menü öffnen</span>
              </Button>
            </SheetTrigger>



            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              
              <SheetHeader className="text-left">
                <SheetTitle className="text-xs uppercase tracking-[0.2em] text-slate-400 sr-only">
                  Navigation
                </SheetTitle>
                <SheetDescription className="sr-only">
                  Wählen Sie einen Navigationspunkt aus.
                </SheetDescription>
              </SheetHeader>

              <nav className="flex flex-col gap-6 mt-12">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)} // Schließt Menü nach Klick
                    className="text-2xl font-bold hover:text-slate-500 transition-colors border-b border-slate-50 px-6"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}