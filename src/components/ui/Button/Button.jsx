import React from "react";

import styles from "./Button.module.css";
function Button({
  onClick,
  children,
  backgroundColor,
  color,
  img,
  width,
  height,
}) {
  const buttonStyle = {
    backgroundColor: backgroundColor,
    color: color,
    width: width,
    height: height,
  };
  return (
    <button onClick={onClick} className={styles.button} style={buttonStyle}>
      <div className={styles.buttonBlock}>
        <div className={styles.title}>
          <p>{children}</p>
        </div>
        <div className={styles.img}>
          <img src={img} />
        </div>
      </div>
    </button>
  );
}

export default Button;
