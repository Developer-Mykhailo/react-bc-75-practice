import FriendlistItem from "../FriendlistItem/FriendlistItem";
import s from "./FriendList.module.css";

const Friendlist = ({ friends }) => {
  return (
    <div className={s.board}>
      <div className={s.header}>
        <h2 className={s.title}>
          <span className={s.titleTop}>Forbes</span>
          <span className={s.titleBottom}>Leader board</span>
        </h2>
      </div>
      <ul className={s.list}>
        {friends.map((friend) => (
          <li className={s.item} key={friend.id}>
            <FriendlistItem
              name={friend.name}
              avatar={friend.avatar}
              capital={friend.capital}
              isIncrease={friend.isIncrease}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Friendlist;
