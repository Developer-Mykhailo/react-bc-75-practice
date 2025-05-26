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
    <div>
      BlogCard
      <img src={poster} alt={tag} />
      <p>{description}</p>
    </div>
  );
};

export default BlogCard;
