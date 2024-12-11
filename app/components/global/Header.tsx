"use client";
import { useState } from "react";
import Image from "next/image";
import logo from "@assets/images/logo.svg";
import { SearchIcon } from "@assets/images/icons";
import { HeaderMenu } from "./HeaderMenu";
import { SearchPopup } from "@app/components";
import Link from "next/link";
export const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <>
      <header className="header">
        <div className="container-fluid">
          <div className="header__row">
            <div className="header__left"></div>
            <div className="header__center">
              <Link href="/" className="header-logo" aria-label="AppsScore">
                <Image src={logo} alt="" width={155} height={30} priority />
              </Link>
            </div>
            <div className="header__right">
              <button
                className="btn btn-text btn-text--lg search-open"
                aria-label="AppsScore Search"
                onClick={() => setIsSearchOpen(true)}
              >
                <SearchIcon />
              </button>
            </div>
          </div>
        </div>
        <HeaderMenu />
      </header>
      <SearchPopup
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />
    </>
  );
};
