import { AllGamesList } from "@app/components";

export default function GamesPage() {
  return (
    <div className="content">
      <div className="container">
        <section className="section">
          <h2>All games</h2>
          <AllGamesList />
        </section>
      </div>
    </div>
  );
}
