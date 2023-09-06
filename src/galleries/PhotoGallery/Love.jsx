import GalleryBlueprint from "../GalleryBluepint";
import GalleryItemPhoto from "../GalleryItemPhoto";
import GalleryRow from "../GalleryRow";
import GalleryItemText from "../GalleryItemText";
import "./Love.scss";

function Love(props) {
  // List of portraits annotations

  const galleryList = [
    {
      annotation:
        "I ALWAYS like to play with fire.I always like to play with fire.I always like to play with fire.",
    },

    {
      annotation:
        "Would you like to be my valentine. Would you like to be my valentine. Would you like to be my valentine. Would you like to be my valentine.",
    },
    {
      annotation:
        "I ALWAYS like to play with fire.I always like to play with fire.I always like to play with fire.",
    },
    {
      annotation:
        "I ALWAYS like to play with fire.I always like to play with fire.I always like to play with fire.",
    },
  ];

  return (
    <GalleryBlueprint className="love-gallery">
      {galleryList.map((item, number) => {
        if ((number + 1) % 2 !== 0) {
          return (
            <GalleryRow key={number}>
              <GalleryItemPhoto
                singleBackdropClassHandler={props.singleBackdropClassHandler}
                setBackdropSingleHandler={props.setBackdropSingleHandler}
                className={"love__" + (number + 1)}
              />
              <GalleryItemText
                galleryList={item.annotation}
                span={number + 1}
              />
            </GalleryRow>
          );
        } else {
          return (
            <GalleryRow key={number}>
              <GalleryItemText
                galleryList={item.annotation}
                span={number + 1}
              />
              <GalleryItemPhoto
                singleBackdropClassHandler={props.singleBackdropClassHandler}
                setBackdropSingleHandler={props.setBackdropSingleHandler}
                className={"love__" + (number + 1)}
              />
            </GalleryRow>
          );
        }
      })}
    </GalleryBlueprint>
  );
}
export default Love;
