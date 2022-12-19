import React from 'react';
import styles from "./Main.module.scss"
import { Element } from "react-scroll"

const Main = () => {
    return (
        <Element name = "Main">
        <div className = {styles.Main}>
        </div>
        </Element>
    );
};

export default Main;