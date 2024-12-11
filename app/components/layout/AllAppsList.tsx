import { renderApp } from "@app/lib/helpers";
import { getApps } from "@app/api";
import { App } from "@app/types";

export const AllAppsList = async () => {
  const apps = await getApps();
  return (
    <div className="positions" id="popularApps">
      {apps.map((app: App) => renderApp(app))}
    </div>
  );
};
