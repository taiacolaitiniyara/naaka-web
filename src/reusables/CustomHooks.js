import { useEffect, useState } from "react";
import readXlsxFile from "read-excel-file";
import { apiGet } from "../api-services/ApiCalls";
import { sidebarList } from "./Lists";

export const useFetchApiList = (url) => {
  const [list, setList] = useState([]);

  useEffect(() => {
    apiGet(url, setList);
  }, [url]);

  return list;
};

export const useShadeTabs = (id) => {
  useEffect(() => {
    sidebarList.map((sb) => {
      if (sb.id === id) {
        document.getElementById(id).style.backgroundColor = "#444";
      }
    });
  }, []);
};

export const useReadExcelFile = (file) => {
  const [list, setList] = useState([]);

  useEffect(() => {
    let finalList = [];
    readXlsxFile(file)
      .then((v) => {
        let tableValues = [];
        let headerCols = [];
        v[0].map((x) => {
          headerCols.push(x);
        });

        v.map((x, i) => {
          if (i !== 0) {
            tableValues.push(x);
          }
        });

        tableValues.map((x) => {
          let obj = {};
          x.map((e, i) => {
            obj[headerCols[i]] = e;
          });
          finalList.push(obj);
        });
        console.log("Excel File", finalList);
        setList(finalList);
      })
      .catch((e) => console.log("Excel Reader Error: ", e));

    return list;
  }, [file]);
};

export const filterData = (data, filter) => {
  return data.filter((d) =>
    JSON.stringify(d).toLowerCase().includes(filter.toLowerCase())
  );
};

export const filterDataWithParams = (data, filter, param) => {
  let list = [];
  
  data.map((d) => {
    if (d[param] === filter) {
      list.push(d);
      console.log("Filter with Params", d[param]);
    }
  });
  return list;
};

export const SortColumn = ({
  sortState,
  setSortState,
  list,
  setNewList,
  columnName,
  name,
}) => {
  function dataType(data) {
    if (typeof data === "number") {
      return "number";
    } else {
      return "string";
    }
  }

  function sort(state) {
    if (dataType(list[0][columnName]) === "number") {
      if (state === 1) {
        setNewList([...list].sort((a, b) => a[columnName] - b[columnName]));
      } else {
        setNewList([...list].sort((a, b) => b[columnName] - a[columnName]));
      }
    } else {
      if (state === 1) {
        setNewList(
          [...list].sort((a, b) => (a[columnName] > b[columnName] ? -1 : 1))
        );
      } else {
        setNewList(
          [...list].sort((a, b) => (a[columnName] > b[columnName] ? 1 : -1))
        );
      }
    }
  }

  return (
    <p>
      {name}
      <i
        className={`fa-solid fa-arrow-${
          sortState === 1 ? "down" : "up"
        }-wide-short`}
        onClick={() => {
          setSortState(sortState === 1 ? 2 : 1);
          sort(sortState);
        }}
        style={{ marginLeft: "5px", cursor: "pointer", color: "#95ff00" }}
      />
    </p>
  );
};
