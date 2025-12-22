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
    <Card className="rounded-none border-gray-100 overflow-hidden group"> 
      <CardContent className="flex flex-col md:flex-row gap-0 md:gap-6 p-0 md:pr-6">
        {imageUrl && (
          <div className="relative mx-6 md:w-32 h-32 aspect-square md:h-auto flex-shrink-0">
            <Image
              src={imageUrl}
              alt={title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        )}

        <div className="flex flex-col gap-2 p-6 md:py-6 md:px-0">
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
          <h3 className="text-xl md:text-2xl font-bold leading-tight tracking-tight break-words">
            {title}
          </h3>
          
          <span className="text-[11px] text-muted-foreground font-medium">
            {subtitle}
          </span>
        </div>
      </CardContent>
    </Card>
  );
}