const FriendlistItem = ({ name, avatar }) => {
  return (
    <div>
      FriendlistItem
      <img src={avatar} alt={name} />
      <p>{name}</p>
    </div>
  );
};

export default FriendlistItem;
