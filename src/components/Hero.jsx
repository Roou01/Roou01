import { leftArrow, rightArrow } from "./variables/svgs.js";
import "./Hero.scss";

function Hero(props) {
  return (
    <section className="hero-section ">
      <div className="hero-section__circle hero-section__circle_left">
        <div className={"circle1 circle1_left " + props.circle1Rotation}></div>
        <div className={"circle2 circle2_left " + props.circle2Rotation}></div>
        <div className={"circle3 circle3_left " + props.circle3Rotation}>
          <button
            className={"left-button-double " + props.leftButtonDoubleHide}
          >
            {leftArrow}
          </button>
          <button
            onClick={props.webSectionActive}
            className={"left-button " + props.leftButtonMove}
          >
            {leftArrow}
          </button>
        </div>
      </div>
      <div className="hero-section__main-circle">
        <div className="main-text__container">
          <h1 className="greet">Greetings!</h1>
          <h2>from Anton Bondarenko</h2>
          <p>
            Web Developer <br /> & Pro Photographer
          </p>
        </div>
        <div className="avatar"></div>
        <div className="main-circle__border"></div>
        <ul>
          <li>UI</li>
          <li>Design</li>
          <li>Photography</li>
          <li>WebDev</li>
          <li>Art</li>
        </ul>
      </div>
      <div className="hero-section__circle hero-section__circle_right">
        <div
          className={`circle1 circle1_right ${props.circle1RightRotation}`}
        ></div>
        <div
          className={"circle2 circle2_right " + props.circle2RightRotation}
        ></div>
        <div className={"circle3 circle3_right " + props.circle3RightRotation}>
          <button
            className={"right-button-double " + props.rightButtonDoubleHide}
          >
            {rightArrow}
          </button>
          <button
            onClick={props.photoSectionActive}
            className={"right-button " + props.rightButtonMove}
          >
            {rightArrow}
          </button>
        </div>
      </div>
    </section>
  );
}
export default Hero;
