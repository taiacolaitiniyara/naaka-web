import { useState } from "react";
import { Link } from "react-router-dom";
import { CancelButton, SubmitButton } from "./Buttons";
import "./style.css";

export const Image = ({ name, style }) => {
  return <img src={require(`../images/${name}`)} style={style} />;
};

export const SpaceHorizontal = ({ height }) => {
  return <div style={{ height: `${height}px` }}></div>;
};

export const SpaceVertical = ({ width }) => {
  return <div style={{ width: `${width}px` }}></div>;
};

export const ProfileImg = () => {
  function pic(val) {
    if (val !== undefined) {
      return val;
    } else {
      require("../images/14.png");
    }
  }
  return (
    <img
      src={JSON.parse(localStorage.getItem("userInfo")).LoginInfo.ProfileImg}
    />
  );
};

export const Status = (status) => {
  if (status === 0) {
    return <i className="fa-solid fa-square" style={{ color: "#444" }} />;
  } else if (status === 1) {
    return (
      <i className="fa-solid fa-square-check" style={{ color: "#86b300" }} />
    );
  } else if (status === true) {
    return (
      <i className="fa-solid fa-square-check" style={{ color: "#86b300" }} />
    );
  } else if (status === false) {
    return <i className="fa-solid fa-square" style={{ color: "#444" }} />;
  }
};

export const MenuListItem = ({ name, to }) => {
  return (
    <Link
      to={to}
      style={{ textDecoration: "none", color: "#000", fontWeight: "700" }}
    >
      <div
        className="menu-list-item"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {name}
        <i className="fa-solid fa-angle-right" />
      </div>
    </Link>
  );
};

export const IsActiveIcon = ({ isActive }) => {
  return (
    <i className={`fa-solid fa-square${isActive === true ? "-check" : ""}`} />
  );
};

export const Collapsible = ({ title, child }) => {
  const [showChild, setShowChild] = useState(false);
  return (
    <div>
      <div
        style={{
          backgroundColor: showChild === true ? "#ccc" : "#eee",
          border: showChild === true ? "1px solid #bbb" : "1px solid #ddd",
        }}
        className="click-list-item"
        onClick={() => setShowChild(!showChild)}
      >
        {title}{" "}
        <i
          className={`fa-solid fa-${showChild === false ? "plus" : "minus"}`}
        />
      </div>
      <SpaceHorizontal height={10} />
      <div
        style={{
          display: showChild === false ? "none" : "block",
          paddingLeft: "15px",
          paddingRight: "15px",
        }}
      >
        {child}
      </div>
    </div>
  );
};

export const PopupForm = (props) => {
  return (
    <div className="popup-form-container">
      <form
        className="popup-form"
        onSubmit={(e) => {
          e.preventDefault();
          props.onSubmit();
          //props.trigger(false);
        }}
        style={{ width: props.width }}
      >
        <div className="popup-form-header">
          <h3>{props.heading}</h3>
          <i
            className="fa-solid fa-times"
            style={{ fontSize: "1.2rem", cursor: "pointer" }}
            onClick={() => props.trigger(false)}
          />
        </div>
        <div
          style={{ maxHeight: "500px", overflowY: "scroll", padding: "5px" }}
        >
          {props.children}
        </div>
        <SpaceHorizontal height={20} />
        <div
          className="popup-form-footer"
          style={{ display: "flex", justifyContent: "flex-end" }}
        >
          <CancelButton onClick={() => props.trigger(false)} />
          <SpaceVertical width={10} />
          <SubmitButton text={props.submitBtnText} />
        </div>
      </form>
    </div>
  );
};

export const DataWithLabelDisplay = ({ data, label, dataId }) => {
  return (
    <div>
      <div
        style={{
          color: "#777",
          fontSize: "0.85rem",
          marginLeft: "5px",
        }}
        htmlFor={dataId}
      >
        {label}
      </div>
      <div
        style={{
          borderRadius: "5px",
          backgroundColor: "#eee",
          padding: "5px",
          width: "fit-content",
        }}
        id={dataId}
      >
        {data}
      </div>
    </div>
  );
};

export const FlexHorizontalContiner = (props) => {
  return <div style={{ display: "flex" }}>{props.children}</div>;
};
