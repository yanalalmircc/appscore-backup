import { renderApp } from "@app/lib/helpers";
import { getApps } from "@app/api";

import { App } from "@app/types";

export const AllGamesList = async () => {
  const apps = await getApps();
  return (
    <div className="positions" id="popularApps">
      {apps
        .filter((app: App) => app.category.name === "Games")
        .map((app: App) => renderApp(app))}
    </div>
  );
};
