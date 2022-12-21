import React from 'react';
import { Element } from "react-scroll"
import styles from "./Contact.module.scss"

const Contact = () => {
    return (
        <Element name = "Contact">
        <div className = {styles.Contact}>

            <div className = {styles.yellowbox}>
            <img id = "axis" className = {styles.yellowflower} src = {require("../../assets/yellowflower.png")}></img>
            </div>
            <div className = {styles.purplebox}>
            <img  className = {styles.purpleflower} src = {require("../../assets/purpleflower.png")}></img>
            </div>
        </div>
        </Element>
    );
};

export default Contact;