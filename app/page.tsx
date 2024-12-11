import { PopularApps, TopFive, Hero } from "./components";

export default function Home() {
  return (
    <div className="content">
      <div className="container">
        <Hero />
        <PopularApps category="" />
        <TopFive />
        <PopularApps category="Games" />
      </div>
    </div>
  );
}
