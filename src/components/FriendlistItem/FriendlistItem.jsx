import { BiDollarCircle } from "react-icons/bi";
import { FcBullish, FcBearish } from "react-icons/fc";

import s from "./FrendListItem.module.css";

const FriendlistItem = ({ name, avatar, capital, isIncrease }) => {
  return (
    <>
      <img className={s.avatar} src={avatar} alt={name} />
      <p className={s.title}>{name}</p>
      <span className={s.capital}>
        {capital}
        <BiDollarCircle />
        {isIncrease ? <FcBullish /> : <FcBearish />}
      </span>
    </>
  );
};

export default FriendlistItem;
