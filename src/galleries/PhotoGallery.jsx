import Art from "./PhotoGallery/Art";
import Fantasy from "./PhotoGallery/Fantasy";
import Portraits from "./PhotoGallery/Portraits";
import Nature from "./PhotoGallery/Nature";
import Love from "./PhotoGallery/Love";

function PhotoGallery(props) {
  const renderGalleries = () => {
    if (props.curGallery === "art") {
      return (
        <Art
          singleBackdropClassHandler={props.singleBackdropClassHandler}
          setBackdropSingleHandler={props.setBackdropSingleHandler}
        />
      );
    } else if (props.curGallery === "fantasy") {
      return (
        <Fantasy
          singleBackdropClassHandler={props.singleBackdropClassHandler}
          setBackdropSingleHandler={props.setBackdropSingleHandler}
        />
      );
    } else if (props.curGallery === "portrait") {
      return (
        <Portraits
          singleBackdropClassHandler={props.singleBackdropClassHandler}
          setBackdropSingleHandler={props.setBackdropSingleHandler}
        />
      );
    }
    if (props.curGallery === "nature") {
      return (
        <Nature
          singleBackdropClassHandler={props.singleBackdropClassHandler}
          setBackdropSingleHandler={props.setBackdropSingleHandler}
        />
      );
    }
    if (props.curGallery === "love") {
      return (
        <Love
          singleBackdropClassHandler={props.singleBackdropClassHandler}
          setBackdropSingleHandler={props.setBackdropSingleHandler}
        />
      );
    }
  };

  return <div>{renderGalleries()}</div>;
}
export default PhotoGallery;
