"use client";

import { Button } from "./button";
import React from "react";
import { useCellphoneList } from "../context/cellphone-list.context";
import { useNotifications } from "../context/notifications.context";

export function CopyAllButton() {
  const { addNotification } = useNotifications();
  const { prefix } = useCellphoneList();

  const handleClick = React.useCallback(
    function handleClick() {
      const table = document.getElementById("results-table");
      if (!table) {
        throw new Error("Failed to find Table with id #results-table");
      }

      // Create a range to select the table
      const range = document.createRange();
      range.selectNode(table);

      // Create a selection object
      const selection = window.getSelection();
      selection?.removeAllRanges();
      selection?.addRange(range);

      let list = selection?.toString();

      // If the prefix starts with a + character, escape the
      // entire string for Google sheets to parse it properly
      if (prefix.startsWith("+")) {
        list = list
          ?.split("\n")
          .map((row) =>
            row
              .split("\t")
              .map((cell, i) => (i ? cell : `="${cell}"`))
              .join("\t")
          )
          .join("\n");
      }

      // Copy selection to clipboard
      navigator.clipboard.writeText(list || "").then(
        () =>
          addNotification({
            text: "Lista copiada al portapapeles",
            type: "info",
          }),
        () =>
          addNotification({
            text: "No se pudo copiar la lista al portapapeles",
            type: "warning",
          })
      );

      // Clear the selection
      selection?.removeAllRanges();
    },
    [addNotification, prefix]
  );

  return <Button onClick={handleClick}>Copiar</Button>;
}
