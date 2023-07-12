"use client";

import React from "react";

const CellphoneListContext = React.createContext<
  | {
      cellphoneList: CellphoneItem[];
      setCellphoneList: React.Dispatch<React.SetStateAction<CellphoneItem[]>>;
      prefix: string;
      setPrefix: React.Dispatch<React.SetStateAction<string>>;
    }
  | undefined
>(undefined);
CellphoneListContext.displayName = "CellphoneListContext";

export function useCellphoneList() {
  const value = React.useContext(CellphoneListContext);

  if (value === undefined) {
    throw new Error(
      "useCellphoneList must be used within an CellphoneListContextProvider"
    );
  }

  return value;
}

interface CellphoneItem {
  value: string;
  valid: boolean;
}

export function CellphoneListContextProvider(
  props: React.PropsWithChildren<unknown>
) {
  const [cellphoneList, setCellphoneList] = React.useState<CellphoneItem[]>([]);
  const [prefix, setPrefix] = React.useState<string>("");

  const value = {
    cellphoneList,
    setCellphoneList,
    prefix,
    setPrefix,
  };

  return <CellphoneListContext.Provider value={value} {...props} />;
}
