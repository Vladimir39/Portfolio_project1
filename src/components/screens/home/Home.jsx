import React from "react";
import Header from "../header/header";
import InfoCard from "../infoCard/infoCard";
import SpecialOffer from "../specialOffer/SpecialOffer";
import Balance from "../balance/Balance";

import styles from "./Home.module.css";
import Referral from "../referral/Referral";
import Contact from "../contact/Contact";

function Home() {
  return (
    <>
      <div className={styles.home}>
        <Header />
        <div className={styles.infoBlock}>
          <div>
            <InfoCard />
            <SpecialOffer />
          </div>
          <div>
            <div className={styles.referralBalance}>
              <div className={styles.balance}>
                <Balance />
              </div>
              <div className={styles.referral}>
                <Referral />
              </div>
            </div>
            <Contact />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
