import { useState } from "react";

type SearchHash = Record<string, string[]>;

const buildHash = (): SearchHash => {
  // browser only
  const { search } = window.location;
  const terms = search.startsWith("?")
    ? search
        .substring(1)
        .split("&")
        .map((term) => term.split("=").map(decodeURIComponent))
    : [];

  return terms.reduce<SearchHash>(
    (acc, [key, value]) => ({
      ...acc,
      [key]: [...(acc[key] ?? []), value],
    }),
    {}
  );
};

/**
 * Use the search term from browser location
 * @returns SearchHash
 */
export const useSearch = (): SearchHash => {
  const [search, setSearch] = useState<SearchHash>(buildHash());

  window.addEventListener("popstate", () => setSearch(buildHash()), {
    passive: true,
  });

  return search;
};
