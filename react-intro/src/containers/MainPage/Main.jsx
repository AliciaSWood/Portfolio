import React from "react";
import styles from "./Main.module.scss";
import { Element } from "react-scroll";

const Main = () => {
  return (
    <Element name="Main">
      <div className={styles.Main}>
        <div className={styles.headerBox1}>
          <h1 className={styles.header1}>Alicia Wood</h1>
        </div>
        <div className={styles.headerBox2}>
          <h2 className={styles.header2}>Junior Software Dev</h2>
        </div>
      </div>
    </Element>
  );
};

export default Main;
