"use client";

import { ArticleCard } from "@/src/components/ArticleCard";
import { Button } from "@/src/components/ui/button";
import { Articles } from "@/src/constants";
import { Link } from "@/src/i18n/navigation";
import { useTranslations } from "next-intl";

const PublikasiFeat = () => {
  const k = useTranslations("kegiatan");

  // const [articles, setArticles] = useState<ArticleGroup[]>([]);
  return (
    <section className="space-y-16">
      <div>
        <h2 className="text-2xl font-bold text-[#1A4D2E]">{k("publikasi")}</h2>

        <p className="mt-2 text-muted-foreground">{k("descPublikasi")}</p>
      </div>

      {Articles.map((group) => (
        <section key={group.year} className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-bold text-[#1A4D2E]">{group.year}</h3>

            <Button asChild variant="outline">
              <Link href={`/publikasi/${group.year}`}>Semua Artikel</Link>
            </Button>
          </div>

          <div className="grid gap-6">
            {group.items.slice(0, 1).map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        </section>
      ))}
    </section>
  );
};

export default PublikasiFeat;
