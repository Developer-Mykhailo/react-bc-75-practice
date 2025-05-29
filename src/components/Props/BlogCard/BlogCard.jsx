import { formateDateToNow } from "../../../helpers/formate-date";
import style from "./BlogCard.module.css";

const BlogCard = ({
  avatar,
  postedAt,
  poster,
  tag,
  title,
  description,
  name,
}) => {
  return (
    <div className={style.card}>
      <div className={style.cardHeader}>
        <img className={style.cardPoster} src={poster} alt={tag} />
      </div>
      <div className={style.cardBody}>
        <span className={style.tag}>{tag}</span>
        <h2 className={style.cardTitle}>{title}</h2>
        <p className={style.cardText}>{description}</p>
      </div>
      <div className={style.cardFooter}>
        <div className={style.userBox}>
          <img className={style.avatar} src={avatar} alt={name} />
        </div>
        <div>
          <h3 className={style.userName}>{name}</h3>
          <span className={style.date}>{formateDateToNow(postedAt)}</span>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
