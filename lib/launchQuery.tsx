import {
  createContext,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

type LaunchQueryValue = {
  query: string;
  setQuery: (query: string) => void;
};

const LaunchQueryContext = createContext<LaunchQueryValue | null>(null);

export function LaunchQueryProvider({ children }: { children: ReactNode }) {
  const [query, setQuery] = useState("");
  const value = useMemo(() => ({ query, setQuery }), [query]);
  return (
    <LaunchQueryContext.Provider value={value}>
      {children}
    </LaunchQueryContext.Provider>
  );
}

export function useLaunchQuery(): LaunchQueryValue {
  const ctx = useContext(LaunchQueryContext);
  const [local, setLocal] = useState("");
  if (ctx) return ctx;
  return { query: local, setQuery: setLocal };
}
