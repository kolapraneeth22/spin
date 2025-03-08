import React, { useEffect, useState } from 'react';
import imgNature from './Images/img_nature_wide.jpg';
import imgSnow from './Images/img_snow_wide.jpg';
import imgMountains from './Images/img_mountains_wide.jpg'

const Slideshow = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const showSlides = () => {
      let i;
      const slides = document.getElementsByClassName("mySlides");
      const dots = document.getElementsByClassName("dot");
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      setSlideIndex((prevIndex) => {
        const newIndex = prevIndex + 1;
        if (newIndex > slides.length) {
          return 1;
        }
        return newIndex;
      });
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
      if (slides[slideIndex - 1]) {
        slides[slideIndex - 1].style.display = "block";
      }
      if (dots[slideIndex - 1]) {
        dots[slideIndex - 1].className += " active";
      }
    };

    const interval = setInterval(showSlides, 2000);
    return () => clearInterval(interval);
  }, [slideIndex]);

  return (
    <div>
      <div className="slideshow-container">
        <div className="mySlides fade">
          <div className="numbertext">1 / 3</div>
          <img src={imgNature} style={{ width: '100%' }} alt="Nature" />
          <div className="text">Nature</div>
        </div>

        <div className="mySlides fade">
          <div className="numbertext">2 / 3</div>
          <img src={imgSnow} style={{ width: '100%' }} alt="Snow" />
          <div className="text">Snow</div>
        </div>

        <div className="mySlides fade">
          <div className="numbertext">3 / 3</div>
          <img src={imgMountains} style={{ width: '100%' }} alt="Mountains" />
          <div className="text">Mountains</div>
        </div>
      </div>

      <br />

      <div style={{ textAlign: 'center' }}>
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>
    </div>
  );
};

export default Slideshow;
