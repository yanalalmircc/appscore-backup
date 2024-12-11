import Image from "next/image";
import { App } from "@app/types";
import {
  AppCarousel,
  AppRating,
  AppRatingForm,
  Buttons,
} from "@app/components";
import { AndroidIcon, ArrowDownIcon, IOSIcon } from "@app/assets/images/icons";
export const AppCard = ({ app }: { app: App }) => {
  return (
    <div className="single">
      <div className="single__top">
        <div className="single__top-image">
          <Image src={app.logo} alt={app.name} width={120} height={120} />
        </div>
        <div className="single__top-content">
          <h1>{app.name}</h1>
          <p>{app.name} short description</p>
          <p className="light--text">{app.category.name}</p>
        </div>
      </div>
      <div className="single__main">
        <Buttons
          variant="primary"
          scrollToId="rating-form"
          icon={<ArrowDownIcon className="arrow-down" />}
        >
          Start now
        </Buttons>
        {/* add images */}
        <AppCarousel app={app} />
        <div className="text">
          <h2>About this app</h2>
          <p>{app.description}</p>
          <hr />
          <h2>Summary</h2>
          <p>{app.summary}</p>
        </div>

        <AppRating app={app} />
        <AppRatingForm />
        <div className="downloads" id="downloads">
          <h2>Download app</h2>
          <div className="downloads__btns">
            <a
              href={app.linkAndroid}
              className="btn btn-black btn--large"
              target="_blank"
            >
              <AndroidIcon className="mr-2" />
              <span>Download from Google Play</span>
            </a>
            <a
              href={app.linkIos}
              className="btn btn-black btn--large"
              target="_blank"
            >
              <IOSIcon className="mr-2" />
              <span>Download from AppStore</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
