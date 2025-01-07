import Image from "next/image";
import { App } from "@app/types";
import { StarIcon } from "@app/assets/icons";
import Link from "next/link";
export const renderApp = (app?: App) => {
  if (!app || !app.id) {
    return <div>Loading...</div>;
  }

  const appData = { ...app };

  return (
    <Link key={appData.id} href={`/apps/${appData.name}`} className="position">
      <div className="position__image">
        <Image src={appData.logo} alt={appData.name} width={260} height={260} />
      </div>
      <div className="position__content">
        <div className="position__title">{appData.name}</div>
        <div className="position__category">{appData.category.name}</div>
        <div className="position__rate">
          <StarIcon />
          <span>{appData.rating}</span>
        </div>
      </div>
    </Link>
  );
};
