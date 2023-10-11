import React from "react";

import styles from "./SpecialOffer.module.css";

import timeMoney from "../../../../public/timeMoney.png";
import money from "../../../../public/money.webp";
import Arrow2 from "../../../../public/Arrow2.png";
function SpecialOffer() {
  return (
    <>
      <div className={styles.container}>
        <img src={money} className={styles.fonImg} />
        <div>
          <div className={styles.specialBlock}>
            <div className={styles.img}>
              <img src={timeMoney} />
            </div>
            <div className={styles.description}>
              <p>
                You have USD 1.000 pending money. it will be ready in 2 business
                days
              </p>
            </div>
          </div>
        </div>
        <div className={styles.link}>
          <div className={styles.imgArrow}>
            <p>Get your money now</p>
            <img src={Arrow2} />
          </div>
        </div>
      </div>
    </>
  );
}

export default SpecialOffer;
