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

export const useShadeTabs = (id ) => {
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

export const SortColumn = ({
  sortState,
  setSortState,
  list,
  setNewList,
  columnName,
}) => {
  let newList = list.sort((a, b) => {
    if (
      typeof a[columnName] === "number" &&
      typeof b[columnName] === "number"
    ) {
      return sortNumber(a, b);
    } else {
      return sortString();
    }
  });

  function sortNumber(a, b) {
    if (sortState === 1) {
      return a - b;
    } else {
      return b - a;
    }
  }

  function sortString() {
    if (sortState === 1) {
      return 1;
    } else {
      return -1;
    }
  }

  function state(s) {
    if (s === 1) {
      setSortState(2);
    } else {
      setSortState(1);
    }
  }

  return (
    <i
      className={`fa-solid fa-sort-${sortState === 1 ? "up" : "down"}`}
      onClick={() => {
        state(sortState);
        setNewList(newList);
      }}
    />
  );
};
