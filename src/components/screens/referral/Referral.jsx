import React from "react";

import styles from "./Referral.module.css";

import copy from "../../../../public/copy.png";
function Referral() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.title}>
          <p>
            Invite a friedn with code below and redeem special bonus USD 15 from
            us!
          </p>
        </div>
        <div className={styles.infoData}>
          <div className={styles.infoBlock}>
            <div className={styles.nameData}>
              <p>JELLYPOENYA-SEP2023</p>
            </div>
            <div className={styles.infoCopy}>
              <img className={styles.imgCopy} src={copy} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Referral;
