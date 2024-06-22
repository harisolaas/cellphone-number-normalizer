"use client";

import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { CheckIcon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import clsx from "clsx";
import { Column, useCellphoneList } from "../context/cellphone-list.context";
import { TableCellRow } from "./results-table-row";

export function ResultsTable() {
  const { cellphoneList, activeColumns, toggleColumn } = useCellphoneList();

  const styles = {
    headingCell: "border border-slate-600 font-semibold p-1",
  };

  const columnHeadings = {
    [Column.OriginalNumber]: "Número original",
    [Column.State]: "Provincia",
    [Column.City]: "Ciudad",
    [Column.NormalizedNumber]: "Número normalizado",
  };

  return (
    <table className={"w-full border-collapse border border-slate-500"}>
      <thead className={"bg-slate-50"}>
        <tr>
          <th
            className={clsx(styles.headingCell, "text-left relative h-9")}
            colSpan={activeColumns.length}
          >
            Resultados
            <DropdownMenu.Root>
              <DropdownMenu.Trigger asChild>
                <button
                  className="bg-slate-200 p-1 border border-slate-900 absolute right-1 top-1"
                  aria-label="Customize columns"
                >
                  <HamburgerMenuIcon />
                </button>
              </DropdownMenu.Trigger>
              <DropdownMenu.Portal>
                <DropdownMenu.Content
                  className="p-1 border rounded bg-white"
                  sideOffset={5}
                >
                  {Object.entries(columnHeadings).map(([key, label]) => {
                    const isActive = activeColumns.includes(Number(key));

                    return (
                      <DropdownMenu.CheckboxItem
                        key={key}
                        className="text-sm flex items-center px-1 pl-6 h-6"
                        checked={isActive}
                        onCheckedChange={() => toggleColumn(Number(key))}
                      >
                        <DropdownMenu.ItemIndicator className="absolute left-0 w-6 pl-1">
                          <CheckIcon />
                        </DropdownMenu.ItemIndicator>
                        {label}
                      </DropdownMenu.CheckboxItem>
                    );
                  })}
                </DropdownMenu.Content>
              </DropdownMenu.Portal>
            </DropdownMenu.Root>
          </th>
        </tr>
        <tr>
          {activeColumns.includes(Column.OriginalNumber) && (
            <th scope="col" className={clsx(styles.headingCell)}>
              Número original
            </th>
          )}
          {activeColumns.includes(Column.State) && (
            <th scope="col" className={clsx(styles.headingCell)}>
              Provincia
            </th>
          )}
          {activeColumns.includes(Column.City) && (
            <th scope="col" className={clsx(styles.headingCell)}>
              Ciudad
            </th>
          )}
          {activeColumns.includes(Column.NormalizedNumber) && (
            <th scope="col" className={clsx(styles.headingCell)}>
              Número normalizado
            </th>
          )}
        </tr>
      </thead>
      <tbody id="results-table">
        {cellphoneList.map((c, idx) => (
          <TableCellRow key={idx} {...c} />
        ))}
      </tbody>
    </table>
  );
}
