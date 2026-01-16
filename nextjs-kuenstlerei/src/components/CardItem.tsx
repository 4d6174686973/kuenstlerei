import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

type BadgeData = {
  text: string;
  className?: string;
};

type CardItemProps = {
  title: string;
  subtitle: string;
  imageUrl?: string;
  badges?: BadgeData[];
};

export default function CardItem({
  title,
  subtitle,
  imageUrl,
  badges = [],
}: CardItemProps) {
  return (
    <Card className="rounded-none p-0 border-gray-100 overflow-hidden group hover:border-gray-300 transition-all duration-300 shadow-none hover:shadow-sm"> 
      <CardContent className="flex flex-col md:flex-row p-0">
        
        {/* BILD-CONTAINER */}
        {imageUrl && (
          <div className="p-6 pr-0 flex-shrink-0 flex justify-center md:justify-start">
            <div className="relative w-40 h-40 aspect-square overflow-hidden bg-gray-50">
              <Image
                src={imageUrl}
                alt={title}
                fill
                sizes="160px"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
          </div>
        )}

        {/* TEXT-BEREICH */}
        <div className="flex flex-col justify-center p-6 gap-2">
          <div className="flex gap-2 flex-wrap mb-1">
            {badges.map((badge, index) => (
              <Badge 
                key={index} 
                variant="secondary"
                className={`rounded-none font-bold text-[9px] tracking-widest border-none ${badge.className}`}
              >
                {badge.text}
              </Badge>
            ))}
          </div>

          <h3 className="text-xl font-bold leading-tight tracking-tight">
            {title}
          </h3>
          
          <p className="text-[12px] text-muted-foreground font-medium leading-relaxed line-clamp-2">
            {subtitle}
          </p>
        </div>

      </CardContent>
    </Card>
  );
}