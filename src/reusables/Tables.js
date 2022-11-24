import { useEffect, useState } from "react";
import { apiGet } from "../api-services/ApiCalls";

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
  refresh,
}) => {
  const [data, setList] = useState([]);
  const [seletedRow, setSelectedRow] = useState(0);
  const getList = () => {
    apiGet(apiRoute, setList);
  };

  refresh = getList;

  useEffect(
    () => {
      getList();
    },
    injectedParameters === undefined ? [] : injectedParameters
  );
  return (
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
          {data.map((rowData, i) => (
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
                    ) : status === undefined ? (
                      rowData[path]
                    ) : (
                      status(rowData[path])
                    )}
                  </td>
                )
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const Edit = () => {};
