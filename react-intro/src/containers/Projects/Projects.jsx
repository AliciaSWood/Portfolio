import React from "react";
import { Element } from "react-scroll";
import styles from "./Projects.module.scss";

const Projects = () => {
  return (
    <Element name="Projects">
      <div className={styles.Projects}>
        <div className={styles.Header}>
          <div className={styles.waviy}>
            <span className={styles.waviySpan}>P</span>
            <span className={styles.waviySpan}>R</span>
            <span className={styles.waviySpan}>O</span>
            <span className={styles.waviySpan}>J</span>
            <span className={styles.waviySpan}>E</span>
            <span className={styles.waviySpan}>C</span>
            <span className={styles.waviySpan}>T</span>
            <span className={styles.waviySpan}>S</span>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default Projects;
