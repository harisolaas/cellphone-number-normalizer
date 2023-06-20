"use client";

import { useContext } from "./context";

export function ResultsTable() {
  const { cellphoneList } = useContext();

  return (
    <table
      id="results-table"
      className="w-full border-collapse border border-slate-500"
    >
      <thead className="bg-slate-50">
        <tr>
          <th className="w-1/2 border border-slate-600 font-semibold">Número</th>
          <th className="w-1/2 border border-slate-600 font-semibold">Válido</th>
        </tr>
      </thead>
      <tbody>
        {cellphoneList.map((c, idx) => (
          <tr key={idx}>
            <td className="border border-slate-700">{c.value}</td>
            <td className="border border-slate-700">
              {c.valid ? "" : "Número inválido"}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
