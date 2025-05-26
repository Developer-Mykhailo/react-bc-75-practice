import StatisticItem from "../StatisticItem/StatisticItem";

const Statistics = ({ stats, title }) => {
  return (
    <div>
      {title && <h2>{title}</h2>}
      <ul>
        {stats.map((item) => (
          <li key={item.id}>
            <StatisticItem title={item.title} total={item.total} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Statistics;
