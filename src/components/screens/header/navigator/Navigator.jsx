import React from "react";

import styles from "./Navigator.module.css";
function Navigator() {
  return (
    <>
      <div className={styles.navigator}>
        <div className={styles.infoBlock}>
          <div className={styles.info}>
            <h3>Summary</h3>
          </div>
          <div className={styles.info}>
            <h3>Cards</h3>
          </div>
          <div className={styles.info}>
            <h3>Activity</h3>
          </div>
          <div className={styles.info}>
            <h3>Recipients</h3>
          </div>
          <div className={styles.info}>
            <h3>Help Center</h3>
          </div>
          <div className={styles.info}>
            <h3>Earn Gifts</h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navigator;
