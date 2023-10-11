import React from "react";

import styles from "./Profile.module.css";

function Profile() {
  return (
    <>
      <div className={styles.profileBlock}>
        <div className={styles.titleProfile}>
          <h3>
            Welcome back, <span className={styles.span}>Jelly!</span>
          </h3>
        </div>
        <div className={styles.avatar}></div>
      </div>
    </>
  );
}

export default Profile;
