import Image from "next/image";
import logo from "@assets/images/logo.svg";

export const Loading = () => {
  return (
    <main className="loading">
      <div className="loading__content">
        <Image
          src={logo}
          alt=""
          width={155}
          height={30}
          priority
          className="loading__image"
        />
      </div>
    </main>
  );
};
