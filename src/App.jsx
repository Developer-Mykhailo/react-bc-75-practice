import BlogCard from "./components/BlogCard/BlogCard";
import article from "./data/article.json";

function App() {
  return (
    <>
      <h1>bc-75</h1>
      <BlogCard
        avatar={article.avatar}
        postedAt={article.postedAt}
        poster={article.poster}
        tag={article.tag}
        title={article.title}
        description={article.description}
        name={article.name}
      />
      {/* <BlogCard {...article} /> */}
    </>
  );
}

export default App;
