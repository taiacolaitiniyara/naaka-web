import { useEffect, useState } from "react";
import { apiGet } from "../api-services/ApiCalls";
import { Filter, filterData, useFetchApiList, useSearch } from "./CustomHooks";
import { SpaceHorizontal } from "./Elements";

export const DynamicTable = ({
  columns,
  tableWidth,
  height,
  apiRoute,
  rowHover,
  seletableRow,
  selectedRowValue,
  setValueFromSelectedRow,
  injectedParameters,
  search,
}) => {
  //const [data, setList] = useState([]);
  const [seletedRow, setSelectedRow] = useState(0);
  const data = useFetchApiList(apiRoute);
  const [query, setQuery] = useState("");

  useEffect(
    () => {},
    injectedParameters === undefined ? [query] : [...injectedParameters, query]
  );
  return (
    <div>
      <div
        style={{
          display: search === true ? "block" : "none",
        }}
      >
        <input
          onChange={(v) => setQuery(v.target.value)}
          placeholder={"Search"}
          style={{border: "1px solid #aaa", backgroundColor: "#ddd"}}
        />
        <SpaceHorizontal height={10} />
      </div>
      <div style={{ height: `${height}px`, overflowY: "scroll" }}>
        <table style={{ width: `${tableWidth}%` }}>
          <tbody>
            <tr style={{ position: "sticky", top: 0 }}>
              {columns.map(({ name, width, edit }) => (
                <th
                  style={{
                    width: `${width === undefined ? "" : width + "%"}`,
                  }}
                  key={name}
                >
                  {edit === true ? "Edit" : name}
                </th>
              ))}
            </tr>
            {filterData(data, query).map((rowData, i) => (
              <tr
                key={i}
                className={`${rowHover === true ? "table-row-hover" : ""} ${
                  seletableRow === true
                    ? seletedRow === i
                      ? "selected-table-row"
                      : ""
                    : ""
                }`}
                onClick={() => {
                  if (seletableRow !== undefined) {
                    setSelectedRow(i);
                  }
                  if (
                    selectedRowValue !== undefined &&
                    setValueFromSelectedRow !== undefined
                  ) {
                    setValueFromSelectedRow(rowData[selectedRowValue]);
                  }
                }}
              >
                {columns.map(
                  ({ path, color, status, edit, showEdit, setEditDetails }) => (
                    <td key={path}>
                      <i
                        className="fa-solid fa-square"
                        style={{
                          display: color === undefined ? "none" : "inline",
                          color: color === undefined ? "#fff" : rowData[color],
                          marginRight: "5px",
                          border: "1px solid #aaa"
                        }}
                      />
                      {edit === true ? (
                        <i
                          className="fa-solid fa-pen edit-pen"
                          onClick={() => {
                            setEditDetails(rowData);
                            showEdit();
                          }}
                        />
                      ) : status ? (
                        status(rowData[path])
                      ) : (
                        rowData[path]
                      )}
                    </td>
                  )
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const Edit = () => {};
