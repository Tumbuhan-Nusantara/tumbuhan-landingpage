import Image from "next/image";
import { Card, CardContent, CardHeader } from "@/src/components/ui/card";
import { Link } from "@/src/i18n/navigation";

type ArticleCardProps = {
  article: {
    id: number;
    title: string;
    desc: string;
    src: string;
  };
};

export function ArticleCard({ article }: ArticleCardProps) {
  return (
    <Card className="transition hover:shadow-lg">
      <CardHeader className="flex items-start gap-4">
        <Image
          src="/artikel/newspaper.png"
          alt="article"
          width={22}
          height={22}
        />

        <h3 className="text-lg font-semibold text-[#1A4D2E]">
          {article.title}
        </h3>
      </CardHeader>

      <CardContent className="space-y-3">
        <p className="text-muted-foreground line-clamp-3">
          {article.desc}
        </p>

        <Link
          href={article.src}
          target="_blank"
          className="font-medium text-[#1A4D2E] hover:underline"
        >
          Full Text →
        </Link>
      </CardContent>
    </Card>
  );
}