import "./hero.css";
import { Player } from "@lottiefiles/react-lottie-player";
import abstractAnimation from "../../assets/animation/animation2/animation2.json";
import heroAnimation from "../../assets/animation/animation1/animation.json";

const Hero = () => {
  return (
    <div className="hero-wrapper">
      <div className="hero-background" />
      <div className="hero-container">
        <div className="hero-content">
          <a href="#">
            Introducing Contentstack EDGE{" "}
            <span className="arrow-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                <g id="arrow_right_alt">
                  <path
                    id="arrow_right_alt_2"
                    d="M5.45987 9.42421L4.66884 8.65158L7.75939 5.56103H0.125V4.45726H7.75939L4.65044 1.34832L5.44148 0.575684L9.87494 5.00915L5.45987 9.42421Z"
                    fill="white"
                  />
                </g>
              </svg>
            </span>
          </a>
          <h1>
            <span>PERSONALIZED</span> DIGITAL EXPERIENCES IN REAL TIME
          </h1>
          <p>
            The world’s first adaptive digital experience platform — AI-driven content plus real-time customer data for personalized
            experiences like never before.
          </p>
          <button className="solid">Explore the platform</button>
        </div>
        <div className="hero-right">
          <div className="hero-right-animation">
            <Player autoplay loop src={heroAnimation} style={{ height: "100%", width: "100%" }} />
          </div>
        </div>
      </div>
      <div className="hero-abstarct-lottie">
        <Player autoplay loop src={abstractAnimation} style={{ height: "100%", width: "100%" }} />
      </div>
    </div>
  );
};

export default Hero;
