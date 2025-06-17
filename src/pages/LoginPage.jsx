import { useSelector } from "react-redux";
import { selectIsLoading } from "../redux/auth/authSelectors";
import LoginForm from "../components/LoginForm/LoginForm";
import Loader from "../components/Loader/Loader";
import Section from "../components/Section/Section";
import Container from "../components/Container/Container";

const LoginPage = () => {
  const isLoading = useSelector(selectIsLoading);

  return (
    <Section>
      <Container>
        <LoginForm />
        {isLoading && <Loader />}
      </Container>
    </Section>
  );
};

export default LoginPage;
