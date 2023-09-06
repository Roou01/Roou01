import "./MobileFooter.scss";
import leftOutline from "../../media/mobile-btn-outline-left.svg";
import rightOutline from "../../media/mobile-btn-outline-right.svg";
import leftLine from "../../media/footer-left-line.svg";
import rightLine from "../../media/footer-right-line.svg";
import { webBtn, homeBtn, photoBtn } from "../variables/svgs.js";

function MobileFooter(props) {
  const mobileLeftBtnClasses = `mobile-left-btn ${props.className.activeClassWeb}`;
  const mobileRightBtnClasses = `mobile-right-btn ${props.className.activeClassPhoto}`;
  const mobileHomeBtnClasses = `mobile-home-btn ${props.className.activeClassHome}`;

  // funtions

  return (
    <footer className="mobile-footer">
      <img
        className="left-outline "
        src={leftOutline}
        alt="decoration line"
      ></img>
      <img
        className={"left-line " + props.className.mobileLineHeaderClass}
        src={leftLine}
        alt="decoration line"
      ></img>
      <div onClick={props.mobileWebActive} className={mobileLeftBtnClasses}>
        {webBtn}
      </div>
      <div onClick={props.mobileHomeActive} className={mobileHomeBtnClasses}>
        {homeBtn}
      </div>
      <img
        className="right-outline"
        src={rightOutline}
        alt="decoration line"
      ></img>
      <img
        className={"right-line " + props.className.mobileLineHeaderClass}
        src={rightLine}
        alt="decoration line"
      ></img>
      <div onClick={props.mobilePhotoActive} className={mobileRightBtnClasses}>
        {photoBtn}
      </div>
    </footer>
  );
}
export default MobileFooter;
