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
  badges?: BadgeData[]; // Changed to object array
};

export default function CardItem({
  title,
  subtitle,
  imageUrl,
  badges = [],
}: CardItemProps) {
  return (
    <Card className="rounded-none"> 
      <CardContent className="flex gap-6 px-6">
        {imageUrl && (
          <div className="relative w-24 h-24 flex-shrink-0">
            <Image
              src={imageUrl}
              alt={title}
              fill
              className="object-cover rounded-none"
            />
          </div>
        )}

        <div className="flex flex-col gap-2">
          <h3 className="text-xl font-semibold">{title}</h3>
          <span className="text-xs text-muted-foreground">{subtitle}</span>

          <div className="flex gap-2 flex-wrap">
            {badges.map((badge, index) => (
              <Badge 
                key={index} 
                variant="secondary"
                className={`rounded-none font-normal ${badge.className}`}
              >
                {badge.text}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}