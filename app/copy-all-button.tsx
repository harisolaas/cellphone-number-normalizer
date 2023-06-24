"use client";

import { Button } from "./button";
import React from "react";
import { useNotifications } from "./notifications-context";

export function CopyAllButton() {
  const { addNotification } = useNotifications();

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

      // Copy selection to clipboard
      navigator.clipboard.writeText(selection?.toString() || "").then(
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
    [addNotification]
  );

  return <Button onClick={handleClick}>Copiar</Button>;
}
