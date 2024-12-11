import { getApps } from "@app/api";
import { Buttons } from "@app/components";
import { renderApp } from "@app/lib/helpers";
import { ArrowRight } from "@app/assets/images/icons";
import { App } from "@app/types";
import Link from "next/link";
interface MobileAppDetailsProps {
  category: string;
}

export const PopularApps = async ({ category }: MobileAppDetailsProps) => {
  const data = await getApps(category);
  const popularAppsList = data?.slice(0, 12);

  return (
    <section className="section">
      <h2>{category === "Games" ? "Popular Games" : "Popular Apps"}</h2>
      <div className="positions" id="popularApps">
        {popularAppsList?.map((app: App) => (
          <div key={app.id}>{renderApp(app)}</div>
        ))}
      </div>
      <Link href={category === "Games" ? "/games" : "/apps"}>
        <Buttons variant="secondary" icon={<ArrowRight className="" />}>
          {category === "Games" ? "Show more games" : "Show more apps"}
        </Buttons>
      </Link>
    </section>
  );
};
