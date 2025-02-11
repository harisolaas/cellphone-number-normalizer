import { Column, useCellphoneList } from "../context/cellphone-list.context";
import { getNumberGeoOrigin } from "../utils/get-number-geo-origin";

export function TableCellRow({
  valid,
  value,
  originalValue,
}: {
  valid: boolean;
  value: string;
  originalValue: string;
}) {
  const { activeColumns, prefix } = useCellphoneList();

  const defaultGeoOrigin = { city: "", state: "" };
  const { city, state } = getNumberGeoOrigin(Number(value)) || defaultGeoOrigin;

  const styles = "border border-slate-700";

  return (
    <tr>
      {activeColumns.includes(Column.OriginalNumber) && (
        <td className={styles}>{originalValue}</td>
      )}
      {activeColumns.includes(Column.State) && (
        <td className={styles}>{state||"-"}</td>
      )}
      {activeColumns.includes(Column.City) && (
        <td className={styles}>{city||"-"}</td>
      )}
      {activeColumns.includes(Column.NormalizedNumber) && (
        <td className={styles}>
          {prefix}
          {value}
          {valid ? "" : " - Número inválido"}
        </td>
      )}
    </tr>
  );
}
