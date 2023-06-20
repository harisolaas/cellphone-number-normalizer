"use client";

import React from "react";

const AppContext = React.createContext<
  | {
      cellphoneList: CellphoneItem[];
      setCellphoneList: React.Dispatch<React.SetStateAction<CellphoneItem[]>>;
    }
  | undefined
>(undefined);
AppContext.displayName = "AppContext";

export function useContext() {
  const value = React.useContext(AppContext);

  if (value === undefined) {
    throw new Error("useContext must be used within an AppContextProvider");
  }

  return value;
}

interface CellphoneItem {
  value: string;
  valid: boolean;
}

export function AppContextProvider(props: React.PropsWithChildren<unknown>) {
  const [cellphoneList, setCellphoneList] = React.useState<CellphoneItem[]>([]);
  const value = {
    cellphoneList,
    setCellphoneList,
  };

  return <AppContext.Provider value={value} {...props} />;
}
