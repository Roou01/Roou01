import "./GalleryItemText.scss";

function GalleryItemText(props) {
  const classes = "photo-gallery__row__item " + props.className;
  return (
    <div className={classes}>
      <p>{props.galleryList}</p>
      <span>{props.span}.</span>
    </div>
  );
}
export default GalleryItemText;
