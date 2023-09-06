import "./BackdropSingle.scss";
import "./BackdropSingleBackgrounds.scss";

function BackdropSingle(props) {
  //   ----------- CLOSE BUTTON IMAGE

  const closeButton = (
    <svg
      id="closeButton"
      width="20"
      height="20"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.4 14L0 12.6L5.6 7L0 1.4L1.4 0L7 5.6L12.6 0L14 1.4L8.4 7L14 12.6L12.6 14L7 8.4L1.4 14Z"
        fill="white"
      />
    </svg>
  );

  //   ----------- BACKDROP LIST OF CLASSES

  const classes = "backdrop " + props.className;

  //   ----------- CLASS FOR BACKDROP ITEM BACKGROUND

  const backdropItemBackground = "backdrop__item " + props.singleBackdropClass;

  //   ----------- CLOSE BACKDROP FUNCTIONALITY

  const closeBackdropSingle = () => props.setBackdropSingleHandler("hidden");

  // !------------------------FUNCTION BODY

  return (
    <div className={classes}>
      <div onClick={closeBackdropSingle} className="backdropCanvas"></div>
      <div className={backdropItemBackground}>
        <div
          onClick={closeBackdropSingle}
          className="backdrop__item__close-button"
        >
          {closeButton}
        </div>
      </div>
    </div>
  );
}
export default BackdropSingle;
