import { getApps } from "@app/api";
import { renderApp } from "@app/lib/helpers";
import { App } from "@app/types";

export const YouMightLike = async () => {
  const data = await getApps();
  const popularAppsList = data?.slice(0, 12);
  return (
    <div>
      <h2>{"Apps you may like"}</h2>
      <div className="positions" id="popularApps">
        {popularAppsList?.map((app: App) => (
          <div key={app.id}>{renderApp(app)}</div>
        ))}
      </div>
    </div>
  );
};
