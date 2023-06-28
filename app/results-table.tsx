"use client";

import { useCellphoneList } from "./cellphone-list-context";

export function ResultsTable() {
  const { cellphoneList, prefix } = useCellphoneList();

  const styles = {
    table: ["w-full", "border-collapse", "border", "border-slate-500"],
    heading: ["bg-slate-50"],
    headingCell: ["w-1/2", "border", "border-slate-600", "font-semibold"],
    cell: ["border", "border-slate-700"],
  };

  return (
    <table className={styles.table.join(" ")}>
      <thead className={styles.heading.join(" ")}>
        <tr>
          <th className={styles.headingCell.join(" ")}>Número</th>
          <th className={styles.headingCell.join(" ")}>Válido</th>
        </tr>
      </thead>
      <tbody id="results-table">
        {cellphoneList.map((c, idx) => (
          <tr key={idx}>
            <td className={styles.cell.join(" ")}>{prefix}{c.value}</td>
            <td className={styles.cell.join(" ")}>
              {c.valid ? "" : "Número inválido"}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
