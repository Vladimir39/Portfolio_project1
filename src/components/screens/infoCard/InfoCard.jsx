import React from "react";

import styles from "./InfoCard.module.css";
import UserCard from "./userCard/UserCard";
import Button from "../../ui/Button/Button";

import arrow from "../../../../public/arrow.png";
import card from "../../../../public/card.png";
import password from "../../../../public/password.png";
import close from "../../../../public/close.png";
import edit from "../../../../public/edit.png";
import AddCard from "../../../../public/AddCard.png";
import RemoveCard from "../../../../public/RemoveCard.png";
function InfoCard() {
  return (
    <>
      <div className={styles.infoCard}>
        <UserCard />
        <div className={styles.container}>
          <div className={styles.block}>
            <div className={styles.paramBlock}>
              <div className={styles.iconParam}>
                <img src={card} />
              </div>
              <div className={styles.nameParamBlock}>
                <div className={styles.titleParamBlock}>
                  <p>Show Card Details</p>
                </div>
                <div className={styles.arrowBlock}>
                  <img src={arrow} />
                </div>
              </div>
              <div>
                <img />
              </div>
            </div>
            <div className={styles.paramBlock}>
              <div className={styles.iconParam}>
                <img src={password} />
              </div>
              <div className={styles.nameParamBlock}>
                <div className={styles.titleParamBlock}>
                  <p>Your PIN</p>
                </div>
                <div className={styles.arrowBlock}>
                  <img src={arrow} />
                </div>
              </div>
              <div>
                <img />
              </div>
            </div>
            <div className={styles.paramBlock}>
              <div className={styles.iconParam}>
                <img src={close} />
              </div>
              <div className={styles.nameParamBlock}>
                <div className={styles.titleParamBlock}>
                  <p>Security Code</p>
                </div>
                <div className={styles.arrowBlock}>
                  <img src={arrow} />
                </div>
              </div>
              <div>
                <img />
              </div>
            </div>
            <div className={styles.paramBlock}>
              <div className={styles.iconParam}>
                <img src={edit} />
              </div>
              <div className={styles.nameParamBlock}>
                <div className={styles.titleParamBlock}>
                  <p>Edit Limits</p>
                </div>
                <div className={styles.arrowBlock}>
                  <img src={arrow} />
                </div>
              </div>
              <div>
                <img />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.button}>
          <Button img={AddCard} backgroundColor="#734495" color="#FFF">
            Add Card
          </Button>
          <Button
            img={RemoveCard}
            backgroundColor="#FFF1EE"
            color="#D5A89F"
            width="150px"
          >
            Remove
          </Button>
        </div>
      </div>
    </>
  );
}

export default InfoCard;
