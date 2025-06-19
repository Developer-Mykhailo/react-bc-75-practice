import CustomNavLink from "../CustomNavLink/CustomNavLink";

function AuthNav() {
  return (
    <div>
      <ul style={{ display: "flex", gap: "16px" }}>
        <li>
          <CustomNavLink to="/login">Log In</CustomNavLink>
        </li>
        <li>
          <CustomNavLink to="/register">Register</CustomNavLink>
        </li>
      </ul>
    </div>
  );
}

export default AuthNav;
