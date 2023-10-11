import React from "react";

import styles from "./UserCard.module.css";

import masterCard from "../../../../../public/masterCard.png";
function UserCard() {
  return (
    <>
      <div className={styles.fonUserCard}>
        <div className={styles.showCard}>
          <div>
            <p>Cards</p>
          </div>
          <div className={styles.showAll}>
            <p>Show All</p>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.fonCard}></div>
          <div className={styles.userCard}>
            <div className={styles.nameCard}>
              <h3>Jelly Grande</h3>
              <img src={masterCard} />
            </div>
            <div className={styles.infoCard}>
              <h3>1234 4567 8910</h3>
              <div className={styles.cvvBlock}>
                <h3>CVV</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserCard;
