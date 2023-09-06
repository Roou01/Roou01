import Header from "./components/Header";
import MobileHeader from "./components/mobile/MobileHeader";
import MobileHero from "./components/mobile/MobileHero";
import MobilePhoto from "./components/mobile/MobilePhoto";
import MobileWeb from "./components/mobile/MobileWeb";
import MainSection from "./components/MainSection";
import MobileFooter from "./components/mobile/MobileFooter";
import Footer from "./components/Footer.jsx";
import BackdropSingle from "./components/BackdropSingle";
import { useState } from "react";

import "./App.scss";

function App() {
  // MONITORING CLASSES

  // mobile classes
  const [mobileHeaderClass, setMobileHeaderClass] = useState(null);
  const [mobileHeroSectionClass, setMobileHeroSectionClass] = useState(null);
  const [mobilePhotoSectionClass, setMobilePhotoSectionClass] =
    useState("hidden");
  const [mobileWebSectionClass, setMobileWebSectionClass] = useState("hidden");
  const [mobileLineHeaderClass, setMobileLineHeaderClass] = useState(null);

  const [webSectionOverflow, setWebSectionOverflow] = useState("overflow");
  const [photoSectionOverflow, setPhotoSectionOverflow] = useState("overflow");

  const [mainSectionClass, setMainSectionClass] = useState(null);
  const [backdropSingle, setBackdropSingle] = useState("hidden");
  const [singleBackdropClass, setSingleBackdropClass] = useState("portrait__2");

  const [activeClassWeb, setActiveClassWeb] = useState(null);
  const [activeClassHome, setActiveClassHome] = useState("menu-active");
  const [activeClassPhoto, setActiveClassPhoto] = useState(null);

  // --- left button functionality
  const [circle1Rotation, setCircle1Rotation] = useState(null);
  const [circle2Rotation, setCircle2Rotation] = useState(null);
  const [circle3Rotation, setCircle3Rotation] = useState(null);
  const [leftButtonMove, setLeftButtonMove] = useState(null);
  const [leftButtonDoubleHide, setLeftButtonDoubleHide] = useState(null);

  // --- right button functionality
  const [circle1RightRotation, setCircle1RightRotation] = useState(null);
  const [circle2RightRotation, setCircle2RightRotation] = useState(null);
  const [circle3RightRotation, setCircle3RightRotation] = useState(null);
  const [rightButtonMove, setRightButtonMove] = useState(null);
  const [rightButtonDoubleHide, setRightButtonDoubleHide] = useState(null);

  // --- web button functionality
  const [outlineClass, setOutlineClass] = useState("plus280deg");
  const [circle1WebRotation, setCircle1WebRotation] =
    useState("circle1-web-rotate");
  const [circle2WebRotation, setCircle2WebRotation] =
    useState("circle2-web-rotate");
  const [circle3WebRotation, setCircle3WebRotation] =
    useState("circle3-web-rotate");
  const [webList, setWebList] = useState("hideList");
  const [webButton, setWebButton] = useState("left-webButton-move");
  const [webButtonDouble, setWebButtonDouble] = useState(
    "left-webButton-double-hide"
  );

  // --- photo button functionality
  const [outlineAngle, setOutlineAngle] = useState("plus90deg");
  const [circle1PhotoRotation, setCircle1PhotoRotation] = useState(
    "circle1-photo-rotate"
  );
  const [circle2PhotoRotation, setCircle2PhotoRotation] = useState(
    "circle2-photo-rotate"
  );
  const [circle3PhotoRotation, setCircle3PhotoRotation] = useState(
    "circle3-photo-rotate"
  );
  const [photoButton, setPhotoButton] = useState("left-photoButton-move");
  const [photoButtonDouble, setPhotoButtonDouble] = useState(
    "left-photoButton-double-hide"
  );
  const [photoList, setPhotoList] = useState("hidePhotoList");

  // -------- setting "web" or "photo" class for main section
  const mainSectionClassHandler = (mainSectionClass) => {
    setMainSectionClass(mainSectionClass);
  };

  // -------- show or hide backdrop
  const setBackdropSingleHandler = (backdropClass) => {
    setBackdropSingle(backdropClass);
  };

  // -------- setting background for photoItem

  const singleBackdropClassHandler = (photoItemClass) => {
    setSingleBackdropClass(photoItemClass);
  };

  function webSectionActive() {
    setCircle1Rotation("circle1_left-rotate");
    setCircle2Rotation("circle2_left-rotate");
    setTimeout(() => {
      setCircle3Rotation("circle3_left-rotate");
    }, 200);
    setLeftButtonMove("left-button-move");
    setLeftButtonDoubleHide("left-button-double-hide");
    setTimeout(() => {
      mainSectionClassHandler("web");
      setActiveClassHome(null);
      setActiveClassPhoto(null);
      setActiveClassWeb("menu-active");
    }, 200);
    setCircle1RightRotation("circle1_right-rotate");
    setCircle2RightRotation("circle2_right-rotate");
    setCircle3RightRotation("circle3_right-rotate");
    setRightButtonMove("right-button-move");
    setRightButtonDoubleHide("right-button-double-hide");

    // --- web button
    setTimeout(() => {
      setOutlineClass(null);
    }, 1400);
    setTimeout(() => {
      setCircle1WebRotation(null);
    }, 900);
    setTimeout(() => {
      setCircle2WebRotation(null);
    }, 1000);
    setTimeout(() => {
      setCircle3WebRotation(null);
    }, 600);
    setTimeout(() => {
      setWebSectionOverflow(null);
    }, 1300);
    setTimeout(() => {
      setWebList(null);
    }, 800);
    setTimeout(() => {
      setWebButton(null);
    }, 1200);
    setTimeout(() => {
      setWebButtonDouble(null);
    }, 1700);

    // --- photo button
    setOutlineAngle("plus90deg");
    setCircle1PhotoRotation("circle1-photo-rotate");
    setCircle2PhotoRotation("circle2-photo-rotate");
    setTimeout(() => {
      setCircle3PhotoRotation("circle3-photo-rotate");
    }, 200);
    setPhotoButton("left-photoButton-move");
    setPhotoButtonDouble("left-photoButton-double-hide");
    setPhotoList("hidePhotoList");
  }

  function homeSectionActive() {
    // --- left button
    setTimeout(() => {
      setCircle1Rotation(null);
      setCircle2Rotation(null);
    }, 1000);
    setTimeout(() => {
      setCircle3Rotation(null);
    }, 800);
    setTimeout(() => {
      setLeftButtonMove(null);
    }, 1200);
    setTimeout(() => {
      setLeftButtonDoubleHide(null);
    }, 1500);

    // --- main section
    setTimeout(() => {
      mainSectionClassHandler(null);
      setActiveClassHome("menu-active");
      setActiveClassWeb(null);
      setActiveClassPhoto(null);
    }, 200);

    //--- left button
    setTimeout(() => {
      setCircle1RightRotation(null);
      setCircle2RightRotation(null);
    }, 1000);
    setTimeout(() => {
      setCircle3RightRotation(null);
    }, 800);
    setTimeout(() => {
      setRightButtonMove(null);
    }, 1200);
    setTimeout(() => {
      setRightButtonDoubleHide(null);
    }, 1500);

    // ---- web button
    setTimeout(() => {
      setWebSectionOverflow("overflow");
    }, 1000);
    setOutlineClass("plus280deg");
    setTimeout(() => {
      setCircle1WebRotation("circle1-web-rotate");
    }, 200);
    setCircle2WebRotation("circle2-web-rotate");
    setTimeout(() => {
      setCircle3WebRotation("circle3-web-rotate");
    }, 300);
    setWebList("hideList");
    setWebButton("left-webButton-move");
    setWebButtonDouble("left-webButton-double-hide");

    // ---- photo button
    setTimeout(() => {
      setPhotoSectionOverflow("overflow");
    }, 1000);
    setOutlineAngle("plus90deg");
    setCircle1PhotoRotation("circle1-photo-rotate");
    setCircle2PhotoRotation("circle2-photo-rotate");
    setTimeout(() => {
      setCircle3PhotoRotation("circle3-photo-rotate");
    }, 400);
    setPhotoButton("left-photoButton-move");
    setPhotoButtonDouble("left-photoButton-double-hide");
    setPhotoList("hidePhotoList");
  }

  function photoSectionActive() {
    // --- left button
    setCircle1Rotation("circle1_left-rotate");
    setCircle2Rotation("circle2_left-rotate");
    setTimeout(() => {
      setCircle3Rotation("circle3_left-rotate");
    }, 200);
    setLeftButtonMove("left-button-move");
    setLeftButtonDoubleHide("left-button-double-hide");
    // --- right button
    setCircle1RightRotation("circle1_right-rotate");
    setCircle2RightRotation("circle2_right-rotate");
    setTimeout(() => {
      setCircle3RightRotation("circle3_right-rotate");
    }, 200);
    setRightButtonMove("right-button-move");
    setRightButtonDoubleHide("right-button-double-hide");
    setTimeout(() => {
      mainSectionClassHandler("photo");
      setActiveClassHome(null);
      setActiveClassPhoto("menu-active");
      setActiveClassWeb(null);
    }, 200);

    // ---- web button
    setTimeout(() => {
      setWebSectionOverflow("overflow");
    }, 1000);
    setOutlineClass("plus280deg");
    setTimeout(() => {
      setCircle1WebRotation("circle1-web-rotate");
    }, 200);
    setCircle2WebRotation("circle2-web-rotate");
    setTimeout(() => {
      setCircle3WebRotation("circle3-web-rotate");
    }, 300);
    setWebList("hideList");
    setWebButton("left-webButton-move");
    setWebButtonDouble("left-webButton-double-hide");

    // ---- photo button
    setTimeout(() => {
      setOutlineAngle(null);
    }, 1300);
    setTimeout(() => {
      setCircle1PhotoRotation(null);
    }, 1000);
    setTimeout(() => {
      setCircle2PhotoRotation(null);
    }, 900);
    setTimeout(() => {
      setCircle3PhotoRotation(null);
    }, 500);
    setTimeout(() => {
      setPhotoButton(null);
    }, 1200);
    setTimeout(() => {
      setPhotoButtonDouble(null);
    }, 1500);
    setTimeout(() => {
      setPhotoSectionOverflow(null);
    }, 1);
    setTimeout(() => {
      setPhotoList(null);
    }, 900);
  }

  // mobile functions

  function mobileWebActive() {
    setTimeout(() => {
      setMobileHeroSectionClass("hidden");
      setMobilePhotoSectionClass("hidden");
      setMobileWebSectionClass(null);
    }, 300);
    setTimeout(() => {
      setMobileHeaderClass("header-hide");
    }, 100);
    setActiveClassWeb("menu-active");
    setActiveClassHome(null);
    setActiveClassPhoto(null);
    setMobileLineHeaderClass("rotate");
  }

  function mobileHomeActive() {
    setMobileWebSectionClass("hidden");
    setMobileHeroSectionClass(null);
    setMobilePhotoSectionClass("hidden");
    setActiveClassHome("menu-active");
    setActiveClassWeb(null);
    setActiveClassPhoto(null);
    setMobileHeaderClass(null);
    setMobileLineHeaderClass(null);
  }

  function mobilePhotoActive() {
    setTimeout(() => {
      setMobileHeroSectionClass("hidden");
      setMobilePhotoSectionClass(null);
    }, 300);
    setTimeout(() => {
      setMobileHeaderClass("header-hide");
    }, 100);
    setActiveClassHome(null);
    setActiveClassPhoto("menu-active");
    setMobileLineHeaderClass("rotate");
    setMobileWebSectionClass("hidden");
    setActiveClassWeb(null);
  }

  return (
    <div className="App">
      <BackdropSingle
        className={backdropSingle}
        setBackdropSingleHandler={setBackdropSingleHandler}
        singleBackdropClass={singleBackdropClass}
      />
      <MobileHeader className={{ mobileHeaderClass, mobileLineHeaderClass }} />
      <Header />
      <MobileHero className={mobileHeroSectionClass} />
      <MobilePhoto className={mobilePhotoSectionClass} />
      <MobileWeb className={mobileWebSectionClass} />
      <MainSection
        webSectionOverflow={webSectionOverflow}
        photoSectionOverflow={photoSectionOverflow}
        // - navigation functions
        webSectionActive={webSectionActive}
        homeSectionActive={homeSectionActive}
        photoSectionActive={photoSectionActive}
        // - position of the main section
        mainSectionClass={mainSectionClass}
        // - backdrop logic
        setBackdropSingleHandler={setBackdropSingleHandler}
        singleBackdropClassHandler={singleBackdropClassHandler}
        // - left button and cicrles
        circle1Rotation={circle1Rotation}
        circle2Rotation={circle2Rotation}
        circle3Rotation={circle3Rotation}
        leftButtonMove={leftButtonMove}
        leftButtonDoubleHide={leftButtonDoubleHide}
        // - rigth button and cicrles
        circle1RightRotation={circle1RightRotation}
        circle2RightRotation={circle2RightRotation}
        circle3RightRotation={circle3RightRotation}
        rightButtonMove={rightButtonMove}
        rightButtonDoubleHide={rightButtonDoubleHide}
        // - web section button
        outlineClass={outlineClass}
        setOutlineClass={setOutlineClass}
        circle1WebRotation={circle1WebRotation}
        circle2WebRotation={circle2WebRotation}
        circle3WebRotation={circle3WebRotation}
        webList={webList}
        webButton={webButton}
        webButtonDouble={webButtonDouble}
        // - photo section button
        outlineAngle={outlineAngle}
        setOutlineAngle={setOutlineAngle}
        circle1PhotoRotation={circle1PhotoRotation}
        circle2PhotoRotation={circle2PhotoRotation}
        circle3PhotoRotation={circle3PhotoRotation}
        photoButton={photoButton}
        photoButtonDouble={photoButtonDouble}
        photoList={photoList}
      />
      <MobileFooter
        className={{
          activeClassHome,
          activeClassPhoto,
          activeClassWeb,
          mobileLineHeaderClass,
        }}
        mobileHomeActive={mobileHomeActive}
        mobilePhotoActive={mobilePhotoActive}
        mobileWebActive={mobileWebActive}
      />
      <Footer
        // - navigation functions
        webSectionActive={webSectionActive}
        homeSectionActive={homeSectionActive}
        photoSectionActive={photoSectionActive}
        // - main navigation classes
        activeClassWeb={activeClassWeb}
        activeClassHome={activeClassHome}
        activeClassPhoto={activeClassPhoto}
        setActiveClassWeb={setActiveClassWeb}
        setActiveClassHome={setActiveClassHome}
        setActiveClassPhoto={setActiveClassPhoto}
        mainSectionClassHandler={mainSectionClassHandler}
      />
    </div>
  );
}

export default App;
