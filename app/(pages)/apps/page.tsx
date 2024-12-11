import { AllAppsList } from "@app/components";

export default function AppsPage() {
  return (
    <div className="content">
      <div className="container">
        <section className="section">
          <h2>All apps</h2>
          <AllAppsList />
        </section>
      </div>
    </div>
  );
}
