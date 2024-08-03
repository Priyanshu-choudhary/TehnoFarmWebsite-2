// src/components/TestimonialSlider.jsx

import React, { useState, useEffect } from 'react';
import './Testimonial.jsx'; // Import your CSS file for styling

const testimonials = [
  {
    text: "TechnoFarm's motor protection solutions have completely transformed how we manage our irrigation systems. The advanced controllers are incredibly reliable, and we've seen a noticeable reduction in equipment downtime. Their technology truly safeguards our motors and helps us maintain a steady water supply.",
    name: "Maria Jones",
    position: "Marketing and Sales",
    image: "harendraSingh.jpg"
  },
  {
    text: "I’ve been thoroughly impressed with TechnoFarm's commitment to innovation. Their products, equipped with the latest microcontroller technology, offer robust protection and control for tube well motors. Their solutions not only enhance the longevity of equipment but also improve overall farm productivity",
    name: "Rakesh Dhiman",
    position: "Production and Quality",
    image: "rakesh.jpg"
  },
  // Add more testimonial objects here
];

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to handle the automatic slide change
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
    }, 5000); // Change slide every 5 seconds

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="testimonial-section bg-zinc-100">
      <div className="container">
        <div className="row">
          <div className="col-lg-7 mx-auto text-center">
            <h2 className="section-title text-5xl font-bold">Testimonials</h2>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-12">
            <div className="testimonial-slider">
              <button className="prev" onClick={handlePrev}>
                <span className="fa fa-chevron-left" />
              </button>
              <div className="testimonial-slide">
                <div className="testimonial-block text-center">
                  <blockquote className="mb-5">
                    <p>{testimonials[currentIndex].text}</p>
                  </blockquote>
                  <div className="author-info">
                    <div className="author-pic">
                      <img width={200} src={testimonials[currentIndex].image} alt={testimonials[currentIndex].name} className="img-fluid w-24 h-24 rounded-full object-cover border-2 border-gray-300" />
                    </div>
                    <h3 className="font-weight-bold">{testimonials[currentIndex].name}</h3>
                    <span className="position d-block mb-3">{testimonials[currentIndex].position}</span>
                  </div>
                </div>
              </div>
              <button className="next" onClick={handleNext}>
                <span className="fa fa-chevron-right" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;
