import "./GalleryItemPhoto.scss";

function GalleryItemPhoto(props) {
  const classes =
    "photo-gallery__row__item photo-gallery__row__item-photo " +
    props.className;

  const BackdropSingleHandler = () => {
    props.setBackdropSingleHandler(null);
    props.singleBackdropClassHandler(props.className);
  };

  return <div onClick={BackdropSingleHandler} className={classes}></div>;
}
export default GalleryItemPhoto;
