import "./GalleryBlueprint.scss";

function GalleryBlueprint(props) {
  const classes = "photo-gallery " + props.className;
  return <div className={classes}>{props.children}</div>;
}
export default GalleryBlueprint;
