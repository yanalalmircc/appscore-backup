import { getApps } from "@app/api";
import { renderApp } from "@app/lib/helpers";
import { Buttons } from "@app/components";
import Link from "next/link";

export const TopFive = async () => {
  const data = await getApps();

  // Filter the data based on category
  const topGamesList = data
    .filter((item) => item.category.name === "Games")
    .slice(0, 5);
  const topAppsList = data
    .filter((item) => item.category.name !== "Games")
    .slice(0, 5);

  return (
    <section className="section section--columns">
      <div>
        <h2>Top 5 apps</h2>
        <div className="positions-list" id="topApps">
          {topAppsList.map((item) => renderApp(item))}
        </div>
        <Link href="/apps">
          <Buttons variant="secondary">Show more apps</Buttons>
        </Link>
      </div>
      <div>
        <h2>Top 5 games</h2>
        <div className="positions-list" id="topGames">
          {topGamesList.map((item) => renderApp(item))}
        </div>
        <Link href="/games">
          <Buttons variant="secondary">Show more games</Buttons>
        </Link>
      </div>
    </section>
  );
};
