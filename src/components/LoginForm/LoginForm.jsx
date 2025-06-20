import { ErrorMessage, Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { validationLoginSchema } from "../../validation/validation";
import { fetchLogin } from "../../redux/auth/authOperations";
import toast from "react-hot-toast";
import s from "./LoginForm.module.css";

import usePasswordToggle from "../../hooks/usePasswordToggle";
import ToggleIcon from "../ToggleIcon/ToggleIcon";

const LoginForm = () => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = usePasswordToggle([
    "password",
    "confirmPassword",
  ]);

  const handleSubmit = async (values) => {
    try {
      const data = await dispatch(fetchLogin(values)).unwrap();
      toast.success(`${data.user.name} sucsesfully login`);
    } catch {
      toast.error("Something went wrong, please try different data.");
    }
  };
  return (
    <div className={s.box}>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationLoginSchema}
      >
        <Form className={s.formWrapper}>
          <div className={s.fieldBox}>
            <Field
              type="email"
              className={s.input}
              placeholder="Enter your email"
              name="email"
            />
            <ErrorMessage name="email" component="div" className={s.error} />
          </div>
          <div className={s.fieldBox}>
            <Field
              className={s.input}
              placeholder="Enter your password"
              name="password"
              type={showPassword.password ? "text" : "password"}
            />
            <ErrorMessage name="password" component="div" className={s.error} />

            <ToggleIcon
              onClick={() => setShowPassword("password")}
              showPassword={showPassword.password}
            />
          </div>

          <div className={s.fieldBox}>
            <Field
              className={s.input}
              placeholder="Enter your password"
              name="password"
              type={showPassword.confirmPassword ? "text" : "password"}
            />
            <ErrorMessage name="password" component="div" className={s.error} />

            <ToggleIcon
              onClick={() => setShowPassword("confirmPassword")}
              showPassword={showPassword.confirmPassword}
            />
          </div>

          <button className={s.button} type="submit">
            Login
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
