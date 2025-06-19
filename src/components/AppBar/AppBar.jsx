import { useSelector } from "react-redux";
import Navigation from "../Navigation/Navigation";
import styles from "./AppBar.module.css";
import { selectIsLoggedIn } from "../../redux/auth/authSelectors";
import UserMenu from "../UserMenu/UserMenu";
import AuthNav from "../AuthNav/AuthNav";

function AppBar() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <header className={styles.header}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
}

export default AppBar;
