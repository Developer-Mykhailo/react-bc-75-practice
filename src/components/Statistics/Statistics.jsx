import { FaRegThumbsUp } from "react-icons/fa";
import { MdPeople, MdOutlineProductionQuantityLimits } from "react-icons/md";
import { GiTreeDoor } from "react-icons/gi";

import StatisticItem from "../StatisticItem/StatisticItem";
import s from "./Statistics.module.css";

const icons = [
  FaRegThumbsUp,
  MdPeople,
  MdOutlineProductionQuantityLimits,
  GiTreeDoor,
];
const Statistics = ({ stats, title }) => {
  return (
    <div>
      {title && <h2 className={s.title}>{title}</h2>}
      <ul className={s.list}>
        {stats.map((item, index) => (
          <li className={s.item} key={item.id}>
            <StatisticItem
              title={item.title}
              total={item.total}
              icon={icons[index]}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Statistics;
