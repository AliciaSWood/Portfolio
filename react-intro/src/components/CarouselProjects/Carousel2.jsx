import React from 'react';
import Slider from "react-slick";
import styles from "./Carousel2.module.scss"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Carousel2 = () => {

        const settings = {
            arrows: true,
            dots: true,
            // className: "center",
            centerMode: true,
            centrePadding: "2vw",
            infinite: true,
            autoplay: true,
            speed: 2000,
            autoplaySpeed: 3000,
            slidesToShow: 2,
            slidesToScroll: 1,
            // swipeToSlide: true,
        }
        return (
            <div className = {styles.SliderHolder}>
                <Slider {...settings} className = {styles.Slider}>
                <div className = {styles.slides}>
                <h2 className = {styles.headerBox}>E-Commerce Site</h2>
                <img className = {styles.images} src = {require("../../assets/EcommerceSnip.PNG")}></img>
                <div className = {styles.paraBox}>
                <p>An e-commerce site fitted with a product grid, a carousel and a cart system.<br></br>Created using React and Firestore.</p>
                </div>
              </div>
              <div className = {styles.slides}>
                <h2 className = {styles.headerBox}>Google Books API</h2>
                <img className = {styles.images} src = {require("../../assets/GoogleBooksAPISnip.PNG")}></img>
                <div className = {styles.paraBox}>
                <p>Use this search program to find your favourite book from the Google Books API.<br></br>Created using React.</p>
                </div>
              </div>
              <div className = {styles.slides}>
                <h2 className = {styles.headerBox}>Morse Code Translator</h2>
                <img className = {styles.images} src = {require("../../assets/MorseCodeSnip.png")}></img>
                <div className = {styles.paraBox}>
                <p>A program that can both translate your Morse Code into text, and your text into Morse Code!<br></br>Created using HTML, Sass and JavaScript.</p>
                </div>
              </div>
              <div className = {styles.slides}>
                <h2 className = {styles.headerBox}>Fake OS</h2>
                <img className = {styles.images} src = {require("../../assets/fakeOSSnip.png")}></img>
                <div className = {styles.paraBox}>
                <p>explain</p>
                </div>
              </div>
                </Slider>
            </div>
    );
};

export default Carousel2;