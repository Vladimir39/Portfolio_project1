import React from "react";

import styles from "./Logo.module.css";

import logo from "../../../../../public/logo.png";
function Logo() {
  return (
    <>
      <div>
        <img className={styles.logo} src={logo} />
      </div>
    </>
  );
}

export default Logo;
