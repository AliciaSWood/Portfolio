import React from "react";
import styles from "./LandingPage.module.scss";
import { Element } from "react-scroll";

const LandingPage = () => {
  return (
    <Element name="Main">
      <div className={styles.Background}>
        <div className={styles.bgAnimation}>
          <div className={styles.stars}></div>
          <div className={styles.stars2}></div>
          <div className={styles.stars3}></div>
          <div className={styles.stars4}></div>
          <div className={styles.WaveBox}>
            <div className={styles.content}>
              <h2>Alicia Wood</h2>
              <h2>Alicia Wood</h2>
            </div>
          </div>
          <div className={styles.SmallWaveHeader}>
            <h3 className={styles.DevText}>
              Junior Software Developer<br></br>
            </h3>
          </div>
          <h3 className={styles.Quote}>
            "Do I dare disturb the universe?"<br></br>{" "}
            &nbsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
            <span className={styles.AuthorName}>- T.S. Eliot</span>
          </h3>
        </div>
      </div>
    </Element>
  );
};

export default LandingPage;
