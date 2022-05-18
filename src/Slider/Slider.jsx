import React from "react";
import { Container, Carousel, Image } from "react-bootstrap";

import "./slider.css";

function Slider() {
  return (
    <Container className="customers-container">
      <h2 className="customers-container-heading">Happy Customers</h2>
      <Carousel className="customers-carousel-container">
        <Carousel.Item indicators="false" className="customers-carousel-item">
          <Image
            className="d-block customers-carousel-img"
            src="https://akns-images.eonline.com/eol_images/Entire_Site/2019430/rs_600x600-190530093053-taylor-swift-cat-3.jpg?fit=around%7C1200:1200&output-quality=90&crop=1200:1200;center,top"
            alt="First slide"
          />
          <Carousel.Caption className="customers-carousel-caption">
            <h5 className="customers-caption-title">Taylor Swift</h5>
            <p>
              <q>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab
                officia numquam possimus illum officiis at sed quos doloremque
                molestias. Quae.
              </q>
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="customers-carousel-item">
          <Image
            className="d-block customers-carousel-img"
            src="https://i.pinimg.com/originals/2f/4b/32/2f4b32cba8cfdd9b9148ac464e167c1e.jpg"
            alt="Second slide"
          />
          <Carousel.Caption className="customers-carousel-caption">
            <h5 className="customers-caption-title">Robert Downey Jr</h5>
            <p>
              <q>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab
                officia numquam possimus illum officiis at sed quos doloremque
                molestias. Quae.
              </q>
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="customers-carousel-item">
          <Image
            className="d-block customers-carousel-img"
            src="https://i.pinimg.com/736x/02/7d/84/027d849ca4f31fb04784a5ffb81c4ac2.jpg"
            alt="Third slide"
          />
          <Carousel.Caption className="customers-carousel-caption">
            <h5 className="customers-carousel-title">Rachel Green</h5>
            <p>
              <q>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab
                officia numquam possimus illum officiis at sed quos doloremque
                molestias. Quae.
              </q>
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
}

export default Slider;
