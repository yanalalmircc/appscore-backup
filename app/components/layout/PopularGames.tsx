import { renderApp } from "@app/lib/helpers";
import { ArrowRight } from "@app/assets/icons";
import { App } from "@app/types";
import { Buttons } from "@app/components";
import Link from "next/link";

export const PopularGames = ({ apps }: { apps: App[] }) => {
  const popularGamesList = apps
    ?.slice(0, 12)
    .filter((app: App) => app.category.name === "Games");
  return (
    <section className="section">
      <h2>Popular Games</h2>
      <div className="positions" id="popularApps">
        {popularGamesList?.map((app: App) => renderApp(app))}
      </div>
      <Link href="/apps">
        <Buttons variant="secondary" icon={<ArrowRight className="" />}>
          Show more games
        </Buttons>
      </Link>
    </section>
  );
};
