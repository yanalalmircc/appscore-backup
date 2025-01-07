import { renderApp } from "@app/lib/helpers";
import { App } from "@app/types";

export const AllGamesList = async ({ apps }: { apps: App[] }) => {
  return (
    <div className="positions" id="popularApps">
      {apps
        .filter((app: App) => app.category.name === "Games")
        .map((app: App) => renderApp(app))}
    </div>
  );
};
