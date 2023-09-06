import Sites from "./WebGallery/Sites";
import Design from "./WebGallery/Design";
import Apps from "./WebGallery/Apps";

function WebGallery(props) {
  const renderGalleries = () => {
    if (props.curGallery === "site") {
      return (
        <Sites
          singleBackdropClassHandler={props.singleBackdropClassHandler}
          setBackdropSingleHandler={props.setBackdropSingleHandler}
        />
      );
    } else if (props.curGallery === "design") {
      return (
        <Design
          singleBackdropClassHandler={props.singleBackdropClassHandler}
          setBackdropSingleHandler={props.setBackdropSingleHandler}
        />
      );
    } else if (props.curGallery === "apps") {
      return (
        <Apps
          singleBackdropClassHandler={props.singleBackdropClassHandler}
          setBackdropSingleHandler={props.setBackdropSingleHandler}
        />
      );
    }
  };
  return <div>{renderGalleries()}</div>;
}
export default WebGallery;
