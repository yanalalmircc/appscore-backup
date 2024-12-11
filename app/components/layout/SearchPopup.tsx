"use client";

import { useState, useEffect } from "react";
import { getApps } from "@app/api";
import { renderApp } from "@app/lib/helpers";
import { App } from "@app/types";

interface SearchPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SearchPopup = ({ isOpen, onClose }: SearchPopupProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [apps, setApps] = useState<App[]>([]);
  const [filteredApps, setFilteredApps] = useState<App[]>([]);

  useEffect(() => {
    const fetchApps = async () => {
      const data = await getApps();
      setApps(data);
    };
    fetchApps();
  }, []);

  useEffect(() => {
    const filtered = apps.filter((app) =>
      app.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredApps(filtered);
  }, [searchTerm, apps]);

  return (
    <div className={`search-wrap ${isOpen ? "search-wrap--opened" : ""}`}>
      <div className="search__top">
        <div className="container-fluid">
          <button
            className="btn btn-text btn-text--lg"
            onClick={onClose}
            aria-label="Close search"
          >
            ✕
          </button>
        </div>
      </div>
      <div className="search__content">
        <div className="container">
          <div className="search__sticky">
            <div className="search__field-wrap">
              <input
                type="text"
                className="search__field"
                placeholder="Search apps..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                autoFocus
              />
            </div>
          </div>
          <div className="search__results positions">
            {searchTerm &&
              filteredApps.map((app) => (
                <div key={app.id} onClick={onClose}>
                  {renderApp(app)}
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};
