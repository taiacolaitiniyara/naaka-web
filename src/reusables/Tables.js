import { useEffect, useState } from "react";
import { apiGet } from "../api-services/ApiCalls";
import { filterData, SortColumn, useFetchApiList } from "./CustomHooks";
import { SpaceHorizontal } from "./Elements";
import { ConnectionsMap } from "./Maps";

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
  otherSetterFunctions,
}) => {
  const [seletedRow, setSelectedRow] = useState(0);
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");
  const [sortState, setSortState] = useState(1);

  useEffect(
    () => {
      apiGet(apiRoute, setData);
    },
    injectedParameters === undefined
      ? [query, data]
      : [...injectedParameters, query, data]
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
          style={{ border: "1px solid #aaa", width: "200px" }}
        />
        <i
          className="fa-solid fa-magnifying-glass"
          style={{
            backgroundColor: "#eee",
            padding: "8px",
            border: "1px solid #aaa",
            borderRadius: "2.5px",
            marginLeft: "5px",
          }}
        />
        <SpaceHorizontal height={10} />
      </div>
      <div style={{ height: `${height}px`, overflowY: "scroll" }}>
        <table style={{ width: `${tableWidth}%` }}>
          <tbody>
            <tr style={{ position: "sticky", top: 0 }}>
              {columns.map(({ name, width, edit, sort, path }) => (
                <th
                  style={{
                    width: `${width === undefined ? "" : width + "%"}`,
                  }}
                  key={name}
                >
                  {edit === true ? "Edit" : name}{" "}
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
                    if (otherSetterFunctions !== undefined) {
                      otherSetterFunctions();
                    }
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

export const ProcessTable = ({
  columns,
  tableWidth,
  height,
  apiRoute,
  rowHover,
  seletableRow,
  selectedRowValue,
  setValueFromSelectedRow,
  injectedParameters,
  otherSetterFunctions,
}) => {
  const [seletedRow, setSelectedRow] = useState();
  const [data, setData] = useState([]);

  const getData = () => {
    apiGet(apiRoute, setData);
  };

  useEffect(
    () => {
      getData();
      console.log(data);
    },
    injectedParameters === undefined ? [] : [...injectedParameters]
  );

  return (
    <div>
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
            {data.length > 0 ? (
              data.map((rowData, i) => (
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
                      if (otherSetterFunctions !== undefined) {
                        otherSetterFunctions();
                      }
                    }
                  }}
                >
                  {columns.map(
                    ({
                      path,
                      color,
                      status,
                      edit,
                      showEdit,
                      setEditDetails,
                    }) => (
                      <td key={path}>
                        <i
                          className="fa-solid fa-square"
                          style={{
                            display: color === undefined ? "none" : "inline",
                            color:
                              color === undefined ? "#fff" : rowData[color],
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
                        ) : status ? (
                          status(rowData[path])
                        ) : (
                          rowData[path]
                        )}
                      </td>
                    )
                  )}
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={3}
                  style={{
                    padding: "10px",
                    margin: "10px",
                    borderStyle: "none",
                    textAlign: "center",
                  }}
                >
                  Empty List
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export const ConnectionsTable = ({
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
  const [seletedRow, setSelectedRow] = useState(0);
  const data = useFetchApiList(apiRoute);
  const [query, setQuery] = useState("");

  useEffect(
    () => {},
    injectedParameters === undefined ? [query] : [...injectedParameters, query]
  );
  console.log("List", data);
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
          style={{ border: "1px solid #aaa", width: "300px" }}
        />
        <i
          className="fa-solid fa-magnifying-glass"
          style={{
            backgroundColor: "#eee",
            padding: "8px",
            border: "1px solid #aaa",
            borderRadius: "2.5px",
            marginLeft: "5px",
          }}
        />
      </div>
      <SpaceHorizontal height={10} />
      <ConnectionsMap coordsList={filterData(data, query)} height={250} />
      <SpaceHorizontal height={10} />
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
