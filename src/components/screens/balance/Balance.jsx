import React from "react";
import Button from "../../ui/Button/Button";

import styles from "./Balance.module.css";

import arrowBlack from "../../../../public/arrowBlack.png";
import arrowWhite from "../../../../public/arrowWhite.png";
import plus from "../../../../public/plus.png";
function Balance() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.balance}>
          <h3 className={styles.h3}>Total Balance</h3>
          <p className={styles.p}>29,475.00</p>
          <span className={styles.span}>USD</span>
        </div>
        <div className={styles.button}>
          <Button
            img={arrowWhite}
            backgroundColor="#734495"
            color="#FFF"
            width="130px"
          >
            Send
          </Button>
          <Button
            img={arrowBlack}
            backgroundColor="#F5F5F5"
            color="#000"
            width="130px"
          >
            Request
          </Button>
          <Button
            img={plus}
            backgroundColor="#F5F5F5"
            color="#000"
            width="130px"
          >
            Top Up
          </Button>
        </div>
      </div>
    </>
  );
}

export default Balance;
