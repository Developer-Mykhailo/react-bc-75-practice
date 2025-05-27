import s from "./StatisticItem.module.css";

function StatisticItem({ title, total, icon: Icon }) {
  return (
    <>
      <Icon className={s.icon} />
      <p className={s.counter}>{total}</p>
      <p className={s.text}>{title}</p>
    </>
  );
}

export default StatisticItem;
