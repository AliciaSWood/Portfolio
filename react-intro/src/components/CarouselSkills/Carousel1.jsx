import React from 'react';
import Slider from "react-slick";
import styles from "./Carousel1.module.scss"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Carousel1 = () => {
    const settings = {
        focusOnSelect: true,
        infinite: true,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        // cssEase: "linear",
        slidesToShow: 5,
        slidesToScroll: 1,
        pauseOnHover: false,
        responsive: [
            {
              breakpoint: 820,
              settings: {
                slidesToShow: 3,
              },
            },
            {
                breakpoint: 1870,
                settings: {
                    slidesToShow: 4
                }
            }
      
          ],
    };
    return (
        <div className={styles.SliderHolder}>
            <Slider {...settings}>
            <div>
            <img className = {styles.icon} src = {require("../../assets/firestore.png")}></img>
          </div>
          <div>
          <img className = {styles.icon} src = {require("../../assets/github-icon.png")}></img>
          </div>
          <div>
          <img className = {styles.icon} src = {require("../../assets/html-logo.png")}></img>
          </div>
          <div>
          <img className = {styles.icon} src = {require("../../assets/java.png")}></img>
          </div>
          <div>
          <img className = {styles.icon} src = {require("../../assets/JS-logo.png")}></img>
          </div>
          <div>
          <img className = {styles.icon} src = {require("../../assets/NestJS-logo.png")}></img>
          </div>
          <div>
          <img className = {styles.icon} src = {require("../../assets/react.png")}></img>
          </div>
          <div>
          <img className = {styles.icon} src = {require("../../assets/sass-logo.png")}></img>
          </div>
            </Slider>
        </div>
    );
};

export default Carousel1;