
import Container from "../components/Container/Container";
import Section from "../components/Section/Section";
import article from "../data/article.json";
import stats from "../data/stats.json";
import friends from "../data/friends.json";
import BlogCard from "../components/Props/BlogCard/BlogCard";
import Statistics from "../components/Props/Statistics/Statistics";
import Friendlist from "../components/Props/Friendlist/Friendlist";

const Props = () => {
  return (
    <Section>
      <Container>
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
        <Statistics stats={stats} title="Main Statistics" />
        <Friendlist friends={friends} />
      </Container>
    </Section>
  );
};

export default Props;
