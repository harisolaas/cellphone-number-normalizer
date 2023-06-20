"use client";

import React from "react";
import { Button } from "./components";

export function CopyAllButton() {
  const handleClick = React.useCallback(function handleClick() {
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

    navigator.permissions
      .query({ name: "clipboard-write" as PermissionName })
      .then((result) => {
        console.log(result);

        if (result.state === "granted" || result.state === "prompt") {
          // Copy the selection to the clipboard
          navigator.clipboard.writeText(selection?.toString() || "");
        }
      });

    // Clear the selection
    selection?.removeAllRanges();
  }, []);
  return <Button onClick={handleClick}>Copiar</Button>;
}
