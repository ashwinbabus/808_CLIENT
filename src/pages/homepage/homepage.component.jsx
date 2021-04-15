import React, { useEffect, useState,useCallback } from "react";
import Slides from "../../components/slides/slides.component";
import Header from "../../components/header/header.component";
import { ReactComponent as KeyboardIcon } from "../../assets/product_icon.svg";
import slides_data from "./slides-data";
import "./homepage.styles.scss";
import { Link, useHistory } from "react-router-dom";

const Homepage = () => {
  
  const[index,setIndex] = useState(0);

  const [headerBg, setHeaderBg] = useState(false);

  const history = useHistory();


 useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });




  const handleScroll = (event) => {
    if (event.srcElement.scrollingElement.scrollTop >= 100) {
      setHeaderBg(true);
    } else {
      setHeaderBg(false);
    }
  };

  const set_index = useCallback((dir) => {
    if (dir === 1) {
      setIndex((index + 1) % slides_data.length);
    } else {
      if (index === 0) {
        setIndex(slides_data.length - 1);
      } else {
        setIndex(index - 1);
      }
    }
  },[index])

  
  useEffect(() => {
    let id = setInterval(() => set_index(1),5000)
    return () => {
      clearInterval(id);
    }
  },[set_index])

  

  
  return (
    <div className="homepage-container">
      <Header transparent background={headerBg} />
      <div className="homepage-slides-container">
        <Slides index={index} />
        <div
          className="direction-nav direction-nav-prev"
          onClick={() => set_index(2)}
        />
        <div
          className="direction-nav direction-nav-next"
          onClick={() => set_index(1)}
        />
        <div className="slider-dots-container">
          {slides_data.map((slide, ind) => {
            return (
              <div
                className={`dot ${ind === index ? "active" : ""}`}
                onClick={() => set_index(ind)}
                key={ind}
              />
            );
          })}
        </div>
      </div>
      <div className="second-section-container">
        <div className="second-section">
          <div className="left-section">
            <div className="left-section-top">
              <h1>Inspired Typing</h1>
              <p>Performance driven mechanical keyboards and peripherals</p>
              <div className="icon-and-heading">
                <KeyboardIcon />
                <Link to="/shop">
                  <h4>OUR PRODUCTS</h4>
                </Link>
              </div>
            </div>
          </div>{" "}
          {/*left section end*/}
          <div className="right-section">
            <div className="right-elements-dimensions text-tile">
              <div
                className="right-section-text-tile"
                onClick={() => history.push("/shop/mouse")}
              >
                <h5>Mice</h5>
                <hr />
                <p>Precision & Comfort</p>
              </div>
            </div>

            <div
              className="parent right-elements-dimensions"
              onClick={() => history.push("/shop/mouse")}
            >
              <div className="child" id="mouse"></div>
            </div>

            <div
              className="parent right-elements-dimensions"
              onClick={() => history.push("/shop/switch")}
            >
              <div className="child" id="switches"></div>
            </div>

            <div
              className="right-elements-dimensions text-tile"
              onClick={() => history.push("/shop/switch")}
            >
              <div className="right-section-text-tile">
                <h5>Switches</h5>
                <hr />
                <p>Precision & Comfort</p>
              </div>
            </div>

            <div
              className="right-elements-dimensions text-tile"
              onClick={() => history.push("/shop/keycaps")}
            >
              <div className="right-section-text-tile">
                <h5>Keycaps</h5>
                <hr />
                <p>Engineered for the ultimate typing experience</p>
              </div>
            </div>

            <div
              className="parent right-elements-dimensions"
              onClick={() => history.push("/shop/keycaps")}
            >
              <div className="child" id="keycaps"></div>
            </div>
          </div>{" "}
          {/*right section end*/}
        </div>{" "}
        {/* second section end */}
      </div>{" "}
      {/* second section container end */}
    </div>
  );
};

export default Homepage;
