import React from "react";
import { ReactNode, createContext, useContext } from "react";
import { MatomoTracker } from "../lib/MatomoTracker";
import { MatomoProviderConfig } from "../types";

type MatomoContextProps = {
  tracker: MatomoTracker;
};

const MatomoContext = createContext<MatomoContextProps>(
  {} as MatomoContextProps
);

export const useMatomo = () => useContext(MatomoContext);

export const MatomoProvider = ({
  config,
  children,
}: {
  children: ReactNode;
  config: MatomoProviderConfig;
}) => {
  const tracker = new MatomoTracker(config);
  return (
    <MatomoContext.Provider value={{ tracker }}>
      {children}
    </MatomoContext.Provider>
  );
};
