import React from "react";
import styles from "./AboutMe.module.scss";
import { Element } from "react-scroll";

const AboutMe = () => {
  return (
    <Element name="AboutMe">
      <div className={styles.AboutMain}>
        <div className={styles.profileBox}>
          <img
            className={styles.image}
            src={require("../../assets/self-image.png")}
          ></img>
          <div className={styles.bio}>
            <p>
              I'm <b>Alicia Wood</b>, a junior software developer from Adelaide.
              My passion for tech and coding comes partially from my love of
              puzzles, as I've always enjoyed the challenge of solving larger
              problems by tackling them one piece at a time.
              <br></br>
              <br></br>Another part of my passion for tech comes from its
              limitless capacity for new and brilliant things. We've made such
              incredible advancements in technology and it's thrilling to be a
              part of that, even if it is as just a small piece of a larger
              puzzle.
            </p>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default AboutMe;
