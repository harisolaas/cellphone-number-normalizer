"use client";

import React from "react";

const CellphoneListContext = React.createContext<
  | {
      cellphoneList: CellphoneItem[];
      setCellphoneList: React.Dispatch<React.SetStateAction<CellphoneItem[]>>;
      prefix: string;
      setPrefix: React.Dispatch<React.SetStateAction<string>>;
      activeColumns: Column[];
      toggleColumn: (column: Column) => void;
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

export interface CellphoneItem {
  originalValue: string;
  value: string;
  valid: boolean;
}

export enum Column {
  OriginalNumber,
  State,
  City,
  FormattedNumber,
}

export function CellphoneListContextProvider(
  props: React.PropsWithChildren<unknown>
) {
  const [cellphoneList, setCellphoneList] = React.useState<CellphoneItem[]>([]);
  const [prefix, setPrefix] = React.useState<string>("");
  const [activeColumns, setActiveColumns] = React.useState<Column[]>([
    Column.FormattedNumber,
  ]);
  const toggleColumn = React.useCallback(function toggleColumn(column: Column) {
    setActiveColumns((prev) =>
      prev.includes(column)
        ? prev.filter((c) => c !== column)
        : [...prev, column]
    );
  }, []);

  const value = {
    cellphoneList,
    setCellphoneList,
    prefix,
    setPrefix,
    activeColumns,
    toggleColumn,
  };

  return <CellphoneListContext.Provider value={value} {...props} />;
}
