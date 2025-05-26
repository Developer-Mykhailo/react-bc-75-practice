import FriendlistItem from "../FriendlistItem/FriendlistItem";

const Friendlist = ({ friends }) => {
  return (
    <div>
      Friendlist
      <ul>
        {friends.map((friend) => (
          <li key={friend.id}>
            <FriendlistItem name={friend.name} avatar={friend.avatar} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Friendlist;
