"use client";
import { usePathname } from "next/navigation";
import { HomeIcon, AppsIcon, GamesIcon } from "@assets/images/icons";
import Link from "next/link";
export const HeaderMenu = () => {
  const currentPath = usePathname();
  const activeItemClass = "btn btn-text btn-text--lg active";
  const regularItemClass = "btn btn-text btn-text--lg";
  return (
    <div className="menu">
      <div className="menu__item">
        <Link
          href="/"
          className={currentPath === "/" ? activeItemClass : regularItemClass}
        >
          <HomeIcon />
          <span>Home</span>
        </Link>
      </div>
      <div className="menu__item">
        <Link
          href="/apps"
          className={
            currentPath === "/apps" ? activeItemClass : regularItemClass
          }
        >
          <AppsIcon />
          <span>Apps</span>
        </Link>
      </div>
      <div className="menu__item">
        <Link
          href="/games"
          className={
            currentPath === "/games" ? activeItemClass : regularItemClass
          }
        >
          <GamesIcon />
          <span>Games</span>
        </Link>
      </div>
    </div>
  );
};
