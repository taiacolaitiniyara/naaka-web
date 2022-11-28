import { useEffect, useState } from "react";
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

export const NumberInput = ({
  placeholder,
  onChange,
  value,
  required,
  width,
}) => {
  const [val, setVal] = useState(value);
  return (
    <input
      type={"number"}
      onChange={(v) => {
        setVal(v.target.value);
        onChange(val);
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
      type={"date"}
      onChange={(v) => onChange(v.target.value)}
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
    >
      <option>Select Color</option>
      {list.map((c, i) => (
        <option value={c.ItemDescription}>{c.Description}</option>
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
      defaultValue={value}
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
