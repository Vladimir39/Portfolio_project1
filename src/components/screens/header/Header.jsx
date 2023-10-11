import React from "react";
import Logo from "./logo/Logo";
import Profile from "./profile/Profile";
import Navigator from "./navigator/Navigator";

import styles from "./Header.module.css";
function Header() {
  return (
    <>
      <div className={styles.header}>
        <Logo />
        <Profile />
        <Navigator />
      </div>
    </>
  );
}

export default Header;
