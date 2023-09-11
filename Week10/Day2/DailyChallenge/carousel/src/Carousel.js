import React, { Component } from "react";
// import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Carousel.css"

export default function CarouselComponent() {
    return (
        <div className="carousel-wrapper">
            <Carousel>
                <div>
                    <img src="https://www.akc.org/wp-content/uploads/2018/05/Three-Australian-Shepherd-puppies-sitting-in-a-field.jpg" />
                    <p className="legend">Good boys on the field</p>
                </div>
                <div>
                    <img src="https://qph.cf2.quoracdn.net/main-qimg-ee58b4c2e1ca9c2e805e8cbd167f9015" />
                    <p className="legend">Small good boys</p>
                </div>
                <div>
                    <img src="https://img.freepik.com/free-vector/funny-good-girl-meme_23-2149012450.jpg?w=2000" />
                    <p className="legend">Good girl</p>
                </div>
                <div>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_5ElLfEoTtQIyOm38WiEMesfB6mUaP8Dl6g&usqp=CAU" />
                    <p className="legend">Excited good boy</p>
                </div>
            </Carousel>
        </div>
    );
}
