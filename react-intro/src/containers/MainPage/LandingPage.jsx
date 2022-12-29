import React from 'react';
import styles from "./LandingPage.module.scss"
import { Element } from "react-scroll"

const LandingPage = () => {
    return (
        <Element name = "Main">
        <div className = {styles.Background}>
            <div className ={styles.bgAnimation}>
        <div className ={styles.stars}></div>
        <div className = {styles.stars2}></div>
        <div className = {styles.stars3}></div>
        <div className = {styles.stars4}></div>
        {/* <div  className = {styles.headerBox1}>
            <h1 className = {styles.header1}>Alicia Wood</h1>
            </div>
            <div className = {styles.headerBox2}>
            <h2 className = {styles.header2}>Junior Software Dev</h2>
            </div> */}
            <div className = {styles.WaveBox}>
                <div className = {styles.content}>
        <h2>Alicia Wood</h2>
        <h2>Alicia Wood</h2>
    </div>
    </div>
    <div className = {styles.SmallWaveHeader}>
        <h3>Junior Software Dev<br></br></h3>
    </div>
    <h3 className = {styles.Quote}>"Do I dare disturb the universe?"<br></br> &nbsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;- T.S. Eliot</h3>
    </div>

        </div>
        </Element>
    );
};

export default LandingPage;