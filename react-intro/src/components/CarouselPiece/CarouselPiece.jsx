import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import styles from "./CarouselPiece.module.scss"
import Slider from "react-slick";


const CarouselPiece = () => {
    return (
        <div>
            <Carousel fade className = {styles.Carousel}>
      <Carousel.Item>
        <img
          className={styles.CarouselImage}
          src= {"https://media.istockphoto.com/id/1415835098/photo/blue-abstract-background-with-space-for-design-transition-from-light-to-dark-gradient-elegant.jpg?b=1&s=170667a&w=0&k=20&c=OfK8SADMV0KH6nC53lxMF2YaU_Nw54SnvZnbCDe-Fps="}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className={styles.CarouselImage}
          src={"https://images.saymedia-content.com/.image/t_share/MTc4NzM1OTc4MzE0MzQzOTM1/how-to-create-cool-website-backgrounds-the-ultimate-guide.png"}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className={styles.CarouselImage}
          src={"https://media.istockphoto.com/id/1351756759/photo/blue-curve-shapes-soft-defocused-blurred-motion-abstract-background.jpg?b=1&s=170667a&w=0&k=20&c=l3d4NBJA1tppryMSNmogfovn2AnWFDhvV8I04oko9dg="}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        </div>
    );
};


export default CarouselPiece;