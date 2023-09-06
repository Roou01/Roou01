import logo from "../../media/logo.svg";
import mobileLineRight from "../../media/mobile-line-right.svg";
import mobileLineLeft from "../../media/mobile-line-left.svg";
import "./MobileHeader.scss";

function MobileHeader(props) {
  const mobileHeaderClasses = `mobile-header ${props.className.mobileHeaderClass}`;
  const lineRotateClass = props.className.mobileLineHeaderClass;
  return (
    <header className={mobileHeaderClasses}>
      <div className="mobile-header__container">
        <div className="mobile-header__menu">
          <span className="mobile-header__menu-icon"></span>
        </div>
        <img className="mobile-header__image" src={logo} alt="logo"></img>
        <img
          className={
            "mobile-header__bgimage bg-imgage-right " + lineRotateClass
          }
          src={mobileLineRight}
          alt="line"
        ></img>
        <img
          className={"mobile-header__bgimage bg-imgage-left " + lineRotateClass}
          src={mobileLineLeft}
          alt="line"
        ></img>
        <div className="mobile-header__span"></div>
      </div>
    </header>
  );
}

export default MobileHeader;
