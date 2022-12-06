import { useEffect, useState } from "react";
import readXlsxFile from "read-excel-file";
import { apiGet } from "../api-services/ApiCalls";
import { apiRoutes } from "../api-services/ApiRoutes";
import { SpaceHorizontal, SpaceVertical } from "./Elements";

export const TextInput = ({
  placeholder,
  onChange,
  value,
  required,
  width,
}) => {
  return (
    <input
      type={"text"}
      onChange={(v) => onChange(v.target.value)}
      value={value}
      placeholder={placeholder}
      required={required}
      style={{ width: `${width}%` }}
    />
  );
};

export const EmailInput = ({
  placeholder,
  onChange,
  value,
  required,
  width,
}) => {
  return (
    <input
      type={"email"}
      onChange={(v) => onChange(v.target.value)}
      value={value}
      placeholder={placeholder}
      required={required}
      style={{ width: `${width}%` }}
    />
  );
};

export const PasswordInput = ({
  placeholder,
  onChange,
  value,
  required,
  width,
}) => {
  return (
    <input
      type={"password"}
      onChange={(v) => onChange(v.target.value)}
      value={value}
      placeholder={placeholder}
      required={required}
      style={{ width: `${width}%` }}
    />
  );
};

export const ExcelInput = ({ setList }) => {
  return (
    <input
      type={"file"}
      onChange={(v) => {
        let finalList = [];
        readXlsxFile(v.target.files[0])
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
          .catch((e) => console.log("Excel Reader Error: ", e));
      }}
    />
  );
};

export const NumberInput = ({
  placeholder,
  onChange,
  value,
  required,
  width,
}) => {
  return (
    <input
      type={"number"}
      onChange={(v) => {
        onChange(parseInt(v.target.value));
      }}
      value={value}
      placeholder={placeholder}
      required={required}
      style={{ width: `${width}%` }}
    />
  );
};

export const DateInput = ({ onChange, value, required, width }) => {
  return (
    <input
      type={"datetime-local"}
      onChange={(v) => onChange(v.target.value + ":12.111Z")}
      value={value}
      required={required}
      style={{ width: `${width}%` }}
    />
  );
};

export const SelectColor = ({ set, width, value }) => {
  const [list, setList] = useState([]);
  const [color, setColor] = useState(value !== undefined ? value : "#555");
  useEffect(() => {
    apiGet(apiRoutes.colorList, setList);
  }, []);
  return (
    <select
      onChange={(v) => {
        setColor(v.target.value);
        set(v.target.value);
      }}
      style={{ backgroundColor: color, color: "#fff", width: `${width}%` }}
      value={value}
    >
      <option>Select Color</option>
      {list.map((c, i) => (
        <option key={i} value={c.ItemDescription}>
          {c.Description}
        </option>
      ))}
    </select>
  );
};

export const SelectInput = ({
  list,
  listName,
  optionValue,
  optionName,
  dataType,
  setValue,
  value,
}) => {
  return (
    <select
      onChange={(v) => {
        if (dataType === "int") {
          setValue(parseInt(v.target.value));
        } else {
          setValue(v.target.value);
        }
      }}
      value={value}
    >
      <option>{`Select ${listName}`}</option>
      {list.map((l, i) => (
        <option key={i} value={l[optionValue]}>
          {l[optionName]}
        </option>
      ))}
    </select>
  );
};

export const DoubleInputs = ({
  width1,
  input1,
  width2,
  input2,
  label1,
  label2,
}) => {
  return (
    <div className="double-inputs">
      <div style={{ width: `${width1}%` }}>
        {label1}
        <div>{input1}</div>
      </div>
      <SpaceVertical width={10} />
      <div style={{ width: `${width2}%` }}>
        {label2}
        <div>{input2}</div>
      </div>
    </div>
  );
};

export const TripleInputs = ({
  width1,
  input1,
  width2,
  input2,
  width3,
  input3,
  label1,
  label2,
  label3,
}) => {
  return (
    <div className="double-inputs">
      <div style={{ width: `${width1}%` }}>
        {label1}
        <div>{input1}</div>
      </div>
      <SpaceVertical width={10} />
      <div style={{ width: `${width2}%` }}>
        {label2}
        <div>{input2}</div>
      </div>
      <SpaceVertical width={10} />
      <div style={{ width: `${width3}%` }}>
        {label3}
        <div>{input3}</div>
      </div>
    </div>
  );
};

export const FileUploadInput = ({ onChange, required, width }) => {
  return (
    <input
      type={"file"}
      onChange={(v) => onChange(v.target.files[0])}
      required={required}
      style={{ width: `${width}%` }}
    />
  );
};

export const LogoUploadInput = ({ onChange, required }) => {
  return (
    <input
      type={"file"}
      onChange={(v) => onChange(v.target.files)}
      required={required}
    />
  );
};

export const DateTimeInput = ({ onChange, required, value, width }) => {
  return (
    <input
      type={"datetime-local"}
      onChange={(v) => onChange(v.target.value)}
      required={required}
      value={value}
      style={{ width: `${width}%` }}
    />
  );
};

export const TextAreaInput = ({
  placeholder,
  onChange,
  value,
  width,
  required,
}) => {
  return (
    <textarea
      placeholder={placeholder}
      onChange={(v) => {
        onChange(v.target.value);
      }}
      required={required}
      value={value}
      style={{ width: width }}
    />
  );
};

export const IsActiveInput = ({ isActive, idNumber, setIsActive }) => {
  return (
    <div style={{ padding: "5px" }}>
      <label htmlFor={"IsActiveIcon" + idNumber}>IsActive</label>
      <i
        id={"IsActiveIcon" + idNumber}
        className={`fa-solid fa-square${isActive === false ? "" : "-check"}`}
        onClick={() => setIsActive(!isActive)}
        style={{
          color: isActive == true ? "#86b300" : "#444",
          marginLeft: "10px",
          fontSize: "1rem",
          cursor: "pointer",
        }}
      />
    </div>
  );
};
