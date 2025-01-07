import { AllGamesList } from "@app/components";
import { getApps } from "@app/api";

export default async function GamesPage() {
  const data = await getApps();
  return (
    <div className="content">
      <div className="container">
        <section className="section">
          <h2>All games</h2>
          <AllGamesList apps={data?.data?.mobileApps} />
        </section>
      </div>
    </div>
  );
}
