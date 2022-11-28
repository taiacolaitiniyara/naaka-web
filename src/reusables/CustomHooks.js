import { useEffect, useState } from "react";
import { apiGet } from "../api-services/ApiCalls";

export const useFetchApiList = (url) => {
  const [list, setList] = useState([]);

  useEffect(() => {
    apiGet(url, setList);
  }, [url]);

  return list;
};

export const filterData = (data, filter) => {
  return data.filter((d) =>
    JSON.stringify(d).toLowerCase().includes(filter.toLowerCase())
  );
};
