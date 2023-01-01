import React from "react";
import { Element } from "react-scroll";
import styles from "./Contact.module.scss";

const Contact = () => {
  return (
    <Element name="Contact">
      <div className={styles.Contact}>
        <div className={styles.yellowbox}>
          <img
            className={styles.yellowflower}
            src={require("../../assets/yellowflower.png")}
          ></img>
        </div>
        <div className={styles.FormBox}>
          <h1>Please fill out the form below...</h1>
          <form
            action="https://formspree.io/f/xzbwraee"
            method="POST"
            className={styles.MainForm}
          >
            {/* Form Name */}
            <fieldset>
              <label className={styles.Labels}>Full Name:&emsp;</label>
              <br></br>
              <input
                className={styles.InputBox}
                type="text"
                placeholder="Your name..."
                required
              />
            </fieldset>
            {/* <!--Form - Email--> */}
            <fieldset>
              <label className={styles.Labels}>Email Address:&emsp;</label>
              <br></br>
              <input
                className={styles.InputBox}
                placeholder="Your email..."
                type="email"
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                required
              />
            </fieldset>
            {/* <!--Form - Number--> */}
            <fieldset>
              <label className={styles.Labels}>Phone Number:&emsp;</label>
              <br></br>
              <input
                className={styles.InputBox}
                type="number"
                placeholder="Your phone number..."
              />
            </fieldset>
            {/* <!--Form - Message --> */}
            <fieldset>
              <label className={styles.Labels}>Inquiry:&emsp;</label> <br></br>
              <textarea
                cols="45"
                rows="2"
                className={styles.InputBox}
                placeholder="Type your message..."
                required
              ></textarea>
            </fieldset>
            <button className={styles.SubmitButton} type="submit">
              Submit
            </button>
            <button className={styles.ClearButton} type="reset">
              Clear
            </button>
          </form>
          <h2>
            ... Or visit me at{" "}
            <a
              href="https://www.linkedin.com/in/alicia-wood-a536a41b5/"
              target="_blank"
            >
              LinkedIn
            </a>{" "}
            or{" "}
            <a href="https://github.com/AliciaSWood" target="_blank">
              GitHub
            </a>
          </h2>
        </div>
        <div className={styles.purplebox}>
          <img
            className={styles.purpleflower}
            src={require("../../assets/purpleflower.png")}
          ></img>
        </div>
      </div>
    </Element>
  );
};

export default Contact;
