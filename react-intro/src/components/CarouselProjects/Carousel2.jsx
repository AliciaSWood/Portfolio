import React from "react";
import Slider from "react-slick";
import styles from "./Carousel2.module.scss";
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
    responsive: [
      {
        breakpoint: 820,
        settings: {
          slidesToShow: 1,
        },
      },

    ],
  };
  return (
    <div className={styles.SliderHolder}>
      <Slider {...settings} className={styles.Slider}>
        <a
          href="https://github.com/AliciaSWood/E-Commerce-Shop"
          target="_blank"
        >
          <div className={styles.slides}>
            <h2 className={styles.headerBox}>E-Commerce Site</h2>
            <img
              className={styles.images}
              src={require("../../assets/EcommerceSnip.PNG")}
            ></img>
            <div className={styles.paraBox}>
              <p>
                This E-commerce project was built using <b>React</b>, and the
                data was fetched and updated from <b>Firestore</b> using React
                Hooks. A carousel was implemented on the home screen, each
                product has its own product page (with an opportunity to either
                favourite an item which updates its status on Firestore, or add
                it to the cart), and a cart page which lets the user review or
                remove items in their cart (the cart product data is also stored
                on Firestore).
              </p>
            </div>
          </div>
        </a>
        <a
          href="https://github.com/AliciaSWood/Google-Books-API-Search-Engine"
          target="_blank"
        >
          <div className={styles.slides}>
            <h2 className={styles.headerBox}>Google Books API</h2>
            <img
              className={styles.images}
              src={require("../../assets/GoogleBooksAPISnip.PNG")}
            ></img>
            <div className={styles.paraBox}>
              <p>
                Use this search program to find your favourite book from the{" "}
                <b>Google Books API</b>. This involved creating requests to the
                Google Books API so that a user could search up a book, and have
                it - and similar search results - appear on the web page.
              </p>
            </div>
          </div>
        </a>
        <a href="https://github.com/AliciaSWood/morse-code" target="_blank">
          <div className={styles.slides}>
            <h2 className={styles.headerBox}>Morse Code Translator</h2>
            <img
              className={styles.images}
              src={require("../../assets/MorseCodeSnip.png")}
            ></img>
            <div className={styles.paraBox}>
              <p>
                A jazzy Morse Code Translator! It can handle letters A-Z
                (uppercase and lowercase), numbers 0-9, and most popular
                punctuation (eg. '!')<br></br>Created using <b>HTML, Sass</b>{" "}
                and <b>JavaScript.</b>
              </p>
            </div>
          </div>
        </a>
        <a>
        <div className={styles.slides}>
          <h2 className={styles.headerBox}>Fake OS</h2>
          <img
            className={styles.images}
            src={require("../../assets/fakeOSSnip.png")}
          ></img>
          <div className={styles.paraBox}>
            <p>
              A fake OS, which has been made in the style of Windows XP! This
              nostalgic OS brings back memories of an embarassing amount of
              hours spent playing The Sims 2, while listening to the
              visually-hypnotic music displayed on Windows Media Player. This
              project was built using <b>HTML, Sass</b> and <b>JavaScript.</b>
            </p>
          </div>
        </div>
        </a>
      </Slider>
    </div>
  );
};

export default Carousel2;
