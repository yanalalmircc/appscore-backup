import { App } from "@app/types";

// Create a Star component that handles partial fills
const Star = ({ fillPercentage }: { fillPercentage: number }) => (
  <svg
    width="15"
    height="14"
    viewBox="0 0 15 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id={`star-fill-${fillPercentage}`}>
        <stop offset={`${fillPercentage * 100}%`} stopColor="#ff9f0a" />
        <stop offset={`${fillPercentage * 100}%`} stopColor="#e0e0e0" />
      </linearGradient>
    </defs>
    <path
      d="M7.5 0L9.7042 4.46619L14.6329 5.18237L11.0665 8.65881L11.9084 13.5676L7.5 11.25L3.09161 13.5676L3.93354 8.65881L0.367076 5.18237L5.2958 4.46619L7.5 0Z"
      fill={`url(#star-fill-${fillPercentage})`}
    />
  </svg>
);

export const AppRating = ({ app }: { app: App }) => {
  const rate = parseFloat(app.rating.toString());

  // const fullStars = Math.floor(rate);
  // const hasHalfStar = rate % 1 >= 0.5;
  const totalStars = 5;

  return (
    <div className="ratings">
      <h2>Rating</h2>
      <div className="ratings__row">
        <div className="ratings__info">
          <div className="ratings__rate">{app.rating}</div>
          <div className="ratings__stars">
            {[...Array(totalStars)].map((_, index) => {
              let fillPercentage = 0;
              if (index + 1 <= rate) {
                fillPercentage = 1; // Full star
              } else if (index < rate) {
                fillPercentage = rate - index; // Partial star
              }
              return <Star key={index} fillPercentage={fillPercentage} />;
            })}
          </div>
          <div className="ratings__all">1.08M reviews</div>
        </div>
        <div className="ratings__graphs">
          <div className="ratings-line">
            <div className="ratings-line__number">5</div>
            <div className="ratings-line__progress">
              <div
                className="ratings-line__progress-in"
                style={{ width: "76%" }}
              ></div>
            </div>
          </div>
          <div className="ratings-line">
            <div className="ratings-line__number">4</div>
            <div className="ratings-line__progress">
              <div
                className="ratings-line__progress-in"
                style={{ width: "12%" }}
              ></div>
            </div>
          </div>
          <div className="ratings-line">
            <div className="ratings-line__number">3</div>
            <div className="ratings-line__progress">
              <div
                className="ratings-line__progress-in"
                style={{ width: "2%" }}
              ></div>
            </div>
          </div>
          <div className="ratings-line">
            <div className="ratings-line__number">2</div>
            <div className="ratings-line__progress">
              <div
                className="ratings-line__progress-in"
                style={{ width: "7%" }}
              ></div>
            </div>
          </div>
          <div className="ratings-line">
            <div className="ratings-line__number">1</div>
            <div className="ratings-line__progress">
              <div
                className="ratings-line__progress-in"
                style={{ width: "3%" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
