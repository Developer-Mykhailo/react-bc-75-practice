import s from "./PhotosItem.module.css";

const PhotosItem = ({ color, imgSize, alt, openModal, large }) => {
  return (
    <div
      className={s.thumb}
      style={{ backgroundColor: color, borderColor: color }}
    >
      <img
        src={imgSize}
        alt={alt}
        onClick={() => openModal({ src: large, alt })}
      />
    </div>
  );
};

export default PhotosItem;
