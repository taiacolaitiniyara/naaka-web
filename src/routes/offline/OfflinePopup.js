import React from "react";
import { NaakaLogo } from "../../images/Images";
import { SpaceHorizontal } from "../../reusables/Elements";
import "./style.css";

function OfflinePopup() {
  return (
    <div className="offline-popup-bg">
      <div className="offline-popup-box">
        <NaakaLogo width={200} />
        <SpaceHorizontal height={10} />
        You are offline. Please check your internet connection.
        <SpaceHorizontal height={10} />
        <button
          type="button"
          onClick={() => {
            window.location.reload();
          }}
        >
          Reresh
        </button>
      </div>
    </div>
  );
}

export default OfflinePopup;
