import { App } from "@app/types";
import { renderApp } from "@app/lib/helpers";
export const AllAppsList = ({ apps }: { apps: App[] }) => {
  return (
    <div className="positions" id="popularApps">
      {apps.map((app: App) => renderApp(app))}
    </div>
  );
};
