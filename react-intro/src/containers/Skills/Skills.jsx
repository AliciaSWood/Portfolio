import React from 'react';
import { Element } from "react-scroll"
import CarouselPiece from '../../components/CarouselPiece/CarouselPiece';
import Carousel1 from '../../components/CarouselPiece/Carousel1';



import styles from "./Skills.module.scss"

const Skills = () => {
    
    return (
        <Element name = "Skills">
        <div className = {styles.Skills}>
            <div className = {styles.headerBox}>
            <h1 className = {styles.header}>My skills so far include experience with the following languages, frameworks and applications...</h1>
            </div>
      {/* <CarouselPiece></CarouselPiece> */}
     <Carousel1></Carousel1>
        </div>
        </Element>
    );
};

export default Skills;