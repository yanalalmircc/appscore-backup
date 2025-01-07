"use client";

import { useState, useEffect } from "react";
import { getApps } from "@app/api";
import { renderApp } from "@app/lib/helpers";
import { App } from "@app/types";
import { SpinnerIcon } from "@app/assets/icons";

interface SearchPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SearchPopup = ({ isOpen, onClose }: SearchPopupProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [apps, setApps] = useState<App[]>([]);
  const [filteredApps, setFilteredApps] = useState<App[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchApps = async () => {
      try {
        setIsLoading(true);
        setError("");
        const data = await getApps();
        if (data?.data?.mobileApps) {
          setApps(data.data.mobileApps);
        }
      } catch (error) {
        console.error("Error fetching apps:", error);
        setError("Failed to load apps. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };

    if (isOpen) {
      fetchApps();
    }
  }, [isOpen]);

  useEffect(() => {
    if (searchTerm) {
      const filtered = apps.filter((app) =>
        app.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredApps(filtered);
    } else {
      setFilteredApps([]);
    }
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
            {isLoading ? (
              <div className="flex justify-center items-center py-4">
                <SpinnerIcon className="spinner" />
              </div>
            ) : error ? (
              <div className="text-center text-red-500 py-4">{error}</div>
            ) : (
              searchTerm &&
              filteredApps.map((app) => (
                <div key={app.id} onClick={onClose}>
                  {renderApp(app)}
                </div>
              ))
            )}
            {searchTerm &&
              !isLoading &&
              !error &&
              filteredApps.length === 0 && (
                <div className="text-center py-4">No apps found</div>
              )}
          </div>
        </div>
      </div>
    </div>
  );
};
