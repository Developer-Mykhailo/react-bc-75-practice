import s from "./PhotosItem.module.css";

const PhotosItem = ({ color, imgSize, alt }) => {
  return (
    <div
      className={s.thumb}
      style={{ backgroundColor: color, borderColor: color }}
    >
      <img src={imgSize} alt={alt} />
    </div>
  );
};

export default PhotosItem;
