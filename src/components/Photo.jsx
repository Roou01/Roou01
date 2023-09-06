import PhotoGallery from "../galleries/PhotoGallery";
import { useState } from "react";

import "./Photo.scss";

const leftArrow = (
  <svg
    width="64"
    height="38"
    viewBox="0 0 32 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M24.2559 4.24279C24.5805 4.56431 24.5827 5.08555 24.2537 5.40707L19.3882 10.1717L19.3023 10.2451C18.9734 10.4897 18.5033 10.4642 18.2048 10.1684C18.043 10.0082 17.9605 9.79753 17.9605 9.58794C17.9605 9.37725 18.043 9.16546 18.207 9.00525L23.0724 4.2395L23.1584 4.16609C23.4873 3.92149 23.9573 3.94706 24.2559 4.24279ZM24.3291 18.6783C24.5802 19.001 24.5535 19.4636 24.256 19.7583C23.9303 20.0798 23.4005 20.0809 23.0725 19.7594L15.7465 12.5828L15.6713 12.4987C15.5573 12.3523 15.5 12.1766 15.5 12.0001C15.5 11.7905 15.5825 11.5798 15.7443 11.4196C16.07 11.097 16.5998 11.0959 16.9277 11.4174L24.2538 18.594L24.3291 18.6783Z"
      fill="rgb(189, 189, 189)"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M16.2559 19.7572C16.5805 19.4357 16.5827 18.9145 16.2537 18.5929L11.3882 13.8283L11.3023 13.7549C10.9734 13.5103 10.5033 13.5358 10.2048 13.8316C10.043 13.9918 9.96049 14.2025 9.96049 14.4121C9.96049 14.6228 10.043 14.8345 10.207 14.9948L15.0724 19.7605L15.1584 19.8339C15.4873 20.0785 15.9573 20.0529 16.2559 19.7572ZM16.3291 5.32166C16.5802 4.99896 16.5535 4.53642 16.256 4.24169C15.9303 3.92017 15.4005 3.91907 15.0725 4.24059L7.74651 11.4172L7.67131 11.5013C7.55732 11.6477 7.5 11.8234 7.5 11.9999C7.5 12.2095 7.58254 12.4202 7.74428 12.5804C8.06998 12.903 8.5998 12.9041 8.92773 12.5826L16.2538 5.40597L16.3291 5.32166Z"
      fill="rgb(189, 189, 189)"
    />
  </svg>
);

function Photo(props) {
  const [curGallery, setCurGallery] = useState("portrait");
  const [artClass, setArtClass] = useState(null);
  const [fantasyClass, setFantasyClass] = useState(null);
  const [portraitClass, setPortraitClass] = useState("active");
  const [natureClass, setNatureClass] = useState(null);
  const [loveClass, setLoveClass] = useState(null);

  const art = () => {
    setCurGallery("art");
    setArtClass("active");
    setFantasyClass(null);
    setPortraitClass(null);
    setNatureClass(null);
    setLoveClass(null);
    props.setOutlineAngle("minus27deg");
  };
  const fantasy = () => {
    setCurGallery("fantasy");
    setArtClass(null);
    setFantasyClass("active");
    setPortraitClass(null);
    setNatureClass(null);
    setLoveClass(null);
    props.setOutlineAngle("minus15deg");
  };
  const portrait = () => {
    setCurGallery("portrait");
    setArtClass(null);
    setFantasyClass(null);
    setPortraitClass("active");
    setNatureClass(null);
    setLoveClass(null);
    props.setOutlineAngle(null);
  };
  const nature = () => {
    setCurGallery("nature");
    setArtClass(null);
    setFantasyClass(null);
    setPortraitClass(null);
    setNatureClass("active");
    setLoveClass(null);
    props.setOutlineAngle("plus12deg");
  };
  const love = () => {
    setCurGallery("love");
    setArtClass(null);
    setFantasyClass(null);
    setPortraitClass(null);
    setNatureClass(null);
    setLoveClass("active");
    props.setOutlineAngle("plus22deg");
  };

  return (
    <section className={"photo-section " + props.photoSectionOverflow}>
      <div className="photo-section__circle">
        <div
          className={
            "photo-section__circle__circle-1 " + props.circle1PhotoRotation
          }
        ></div>
        <div
          className={
            "photo-section__circle__circle-outline " + props.outlineAngle
          }
        ></div>
        <ul className={props.photoList}>
          <li className={artClass} onClick={art}>
            Art
          </li>
          <li className={fantasyClass} onClick={fantasy}>
            Fantasy
          </li>
          <li className={portraitClass} onClick={portrait}>
            Portraits
          </li>
          <li className={natureClass} onClick={nature}>
            Nature
          </li>
          <li className={loveClass} onClick={love}>
            Love
          </li>
        </ul>
        <div
          className={
            "photo-section__circle__circle-2 " + props.circle2PhotoRotation
          }
        ></div>
        <div
          className={
            "photo-section__circle__circle-3 " + props.circle3PhotoRotation
          }
        >
          <button className={"left-button-double " + props.photoButtonDouble}>
            {leftArrow}
          </button>
          <button
            onClick={props.homeSectionActive}
            className={"left-button " + props.photoButton}
          >
            {leftArrow}
          </button>
        </div>
      </div>

      <div className="photo-section__text">
        <h1>Photo.</h1>
        <p>
          You can’t use up creativity.
          <br />
          The more you use,
          <br />
          the more you have...
        </p>
      </div>

      <div className="gallery-holder">
        <div className="gallery-holder__box"></div>
        <div className="scroll-line"></div>
        <PhotoGallery
          curGallery={curGallery}
          setBackdropSingleHandler={props.setBackdropSingleHandler}
          singleBackdropClassHandler={props.singleBackdropClassHandler}
        />
      </div>
    </section>
  );
}
export default Photo;
