import readXlsxFile from "read-excel-file";

export const ReadExcelFile = async (file, setList) => {
  console.log("Reader", file, setList);
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
      setList(finalList);
      console.log("FINAL LIST", finalList);
    })
    .catch((e) => console.log("Excel Reader Error: ", e, file));
};
