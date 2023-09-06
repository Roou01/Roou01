import "./GalleryRow.scss";

function GalleryRow(props) {
  const classes = "photo-gallery__row " + props.className;
  return <div className={classes}>{props.children}</div>;
}
export default GalleryRow;
