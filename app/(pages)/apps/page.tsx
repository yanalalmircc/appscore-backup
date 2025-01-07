import { getApps } from "@app/api/getApps";
import { AllAppsList } from "@app/components";
export default async function Apps() {
  try {
    const data = await getApps();
    return (
      <div className="content">
        <div className="container">
          <section className="section">
            <h2>All apps</h2>
            <AllAppsList apps={data?.data?.mobileApps} />
          </section>
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
