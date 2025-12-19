import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

type CardItemProps = {
  title: string;
  date: string;
  imageUrl?: string;
  badges?: string[];
};

export default function CardItem({
  title,
  date,
  imageUrl,
  badges = [],
}: CardItemProps) {
  return (
    <Card>
      <CardContent className="flex gap-4 p-4">
        {imageUrl && (
          <div className="relative w-24 h-24 flex-shrink-0">
            <Image
              src={imageUrl}
              alt={title}
              fill
              className="object-cover rounded"
            />
          </div>
        )}

        <div className="flex flex-col gap-2">
          <h3 className="font-semibold">{title}</h3>
          <span className="text-xs text-muted-foreground">{date}</span>

          <div className="flex gap-2 flex-wrap">
            {badges.map((badge) => (
              <Badge key={badge} variant="secondary">
                {badge}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
