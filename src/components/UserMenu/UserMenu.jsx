import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/authSelectors";
import { logOut } from "../../redux/auth/authOperations";

function UserMenu() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  return (
    <div>
      Welcome, {user.name}!
      <br />
      <button type="button" onClick={() => dispatch(logOut())}>
        Log Out
      </button>
    </div>
  );
}

export default UserMenu;
