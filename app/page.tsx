import { getApps } from "@app/api/getApps";
import { Hero, PopularApps, PopularGames, TopFive } from "@app/components";

export default async function Apps() {
  try {
    const data = await getApps();
    return (
      <div className="content">
        <div className="container">
          <Hero />
          <PopularApps apps={data?.data?.mobileApps} />
          <TopFive apps={data?.data?.mobileApps} />
          <PopularGames apps={data?.data?.mobileApps} />
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error in Apps page:", error);
    return (
      <div className="content">
        <div className="container">
          <h2>Apps</h2>
          <p>Error loading apps data. Please try again later.</p>
        </div>
      </div>
    );
  }
}
