import { ErrorMessage, Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { validationRegisterSchema } from "../../validation/validation";
import { fetchRegister } from "../../redux/auth/authOperations";
import toast from "react-hot-toast";
import s from "./RegisterForm.module.css";

const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = async (values) => {
    try {
      const data = await dispatch(fetchRegister(values)).unwrap();
      toast.success(`${data.user.name} sucsesfully register`);
    } catch {
      toast.error("Something went wrong, please try different data.");
    }
  };
  return (
    <div className={s.box}>
      <Formik
        initialValues={{ name: "", email: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationRegisterSchema}
      >
        <Form className={s.formWrapper}>
          <div className={s.fieldBox}>
            <Field
              type="text"
              className={s.input}
              placeholder="Enter your name"
              name="name"
            />
            <ErrorMessage name="name" component="div" className={s.error} />
          </div>
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
              type={"password"}
            />
            <ErrorMessage name="password" component="div" className={s.error} />
          </div>

          <button className={s.button} type="submit">
            Register
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default RegisterForm;
