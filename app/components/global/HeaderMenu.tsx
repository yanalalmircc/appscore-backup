"use client";
import { usePathname } from "next/navigation";
import { HomeIcon, AppsIcon, GamesIcon } from "@assets/icons";
import Link from "next/link";
export const HeaderMenu = ({
  setIsMenuOpen,
  isMenuOpen,
}: {
  setIsMenuOpen: (isMenuOpen: boolean) => void;
  isMenuOpen: boolean;
}) => {
  const currentPath = usePathname();
  const activeItemClass = "btn btn-text btn-text--lg active";
  const regularItemClass = "btn btn-text btn-text--lg";
  return (
    <div className={`menu ${isMenuOpen ? "is-active" : ""}`}>
      {menuItems.map((item) => (
        <div className="menu__item" key={item.href}>
          <Link
            onClick={() => setIsMenuOpen(false)}
            href={item.href}
            className={
              currentPath === item.href ? activeItemClass : regularItemClass
            }
          >
            {item.icon}
            <span>{item.title}</span>
          </Link>
        </div>
      ))}
    </div>
  );
};

const menuItems = [
  { href: "/", title: "Home", icon: <HomeIcon /> },
  { href: "/apps", title: "Apps", icon: <AppsIcon /> },
  { href: "/games", title: "Games", icon: <GamesIcon /> },
];
