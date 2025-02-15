import { renderApp } from "@app/lib/helpers";
import { ArrowRight } from "@app/assets/icons";
import { App } from "@app/types";
import { Buttons } from "@app/components";
import Link from "next/link";

export const PopularApps = ({ apps }: { apps: App[] }) => {
  const popularAppsList = apps?.slice(0, 12);
  return (
    <section className="section">
      <h2>Popular Apps</h2>
      <div className="positions" id="popularApps">
        {popularAppsList?.map((app: App) => renderApp(app))}
      </div>
      <Link href="/apps">
        <Buttons variant="secondary" icon={<ArrowRight className="" />}>
          Show more apps
        </Buttons>
      </Link>
    </section>
  );
};
