import Web from "./Web";
import Hero from "./Hero";
import Photo from "./Photo";

import "./MainSection.scss";

function MainSection(props) {
  return (
    <div className={`main-section ${props.mainSectionClass}`}>
      <Web
        homeSectionActive={props.homeSectionActive}
        webSectionOverflow={props.webSectionOverflow}
        outlineClass={props.outlineClass}
        setOutlineClass={props.setOutlineClass}
        circle1WebRotation={props.circle1WebRotation}
        circle2WebRotation={props.circle2WebRotation}
        circle3WebRotation={props.circle3WebRotation}
        webList={props.webList}
        webButton={props.webButton}
        webButtonDouble={props.webButtonDouble}
        //....
        setBackdropSingleHandler={props.setBackdropSingleHandler}
        singleBackdropClassHandler={props.singleBackdropClassHandler}
      />
      <Hero
        webSectionActive={props.webSectionActive}
        photoSectionActive={props.photoSectionActive}
        // - left button and cicrles
        circle1Rotation={props.circle1Rotation}
        circle2Rotation={props.circle2Rotation}
        circle3Rotation={props.circle3Rotation}
        leftButtonMove={props.leftButtonMove}
        leftButtonDoubleHide={props.leftButtonDoubleHide}
        // - right button and cicrles
        circle1RightRotation={props.circle1RightRotation}
        circle2RightRotation={props.circle2RightRotation}
        circle3RightRotation={props.circle3RightRotation}
        rightButtonMove={props.rightButtonMove}
        rightButtonDoubleHide={props.rightButtonDoubleHide}
      />
      <Photo
        photoSectionOverflow={props.photoSectionOverflow}
        homeSectionActive={props.homeSectionActive}
        outlineAngle={props.outlineAngle}
        setOutlineAngle={props.setOutlineAngle}
        circle1PhotoRotation={props.circle1PhotoRotation}
        circle2PhotoRotation={props.circle2PhotoRotation}
        circle3PhotoRotation={props.circle3PhotoRotation}
        photoButton={props.photoButton}
        photoButtonDouble={props.photoButtonDouble}
        photoList={props.photoList}
        // ......

        setActiveClassWeb={props.setActiveClassWeb}
        setActiveClassHome={props.setActiveClassHome}
        setActiveClassPhoto={props.setActiveClassPhoto}
        mainSectionClassHandler={props.mainSectionClassHandler}
        setBackdropSingleHandler={props.setBackdropSingleHandler}
        singleBackdropClassHandler={props.singleBackdropClassHandler}
      />
    </div>
  );
}
export default MainSection;
