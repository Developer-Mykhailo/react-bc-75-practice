import { CiCirclePlus } from "react-icons/ci";
import { ErrorMessage, Field, Form, Formik } from "formik";
import style from "./Form.module.css";
import { validationSchema } from "../../../validation/validation";
import { useDispatch } from "react-redux";
import { nanoid } from "nanoid";
import { addToDo } from "../../../redux/action";

const SubmitForm = () => {
  const dispatch = useDispatch();
  const handleSumbit = ({ text }, actions) => {
    dispatch(addToDo({ text, id: nanoid() }));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{ text: "" }}
      validationSchema={validationSchema}
      onSubmit={handleSumbit}
    >
      <Form className={style.form}>
        <Field name="text" placeholder="todo text" className={style.input} />
        <button className={style.button} type="submit">
          <CiCirclePlus className={style.icon} />
        </button>
        <ErrorMessage
          name="text"
          component="p"
          className={style.errorMessage}
        />
      </Form>
    </Formik>
  );
};

export default SubmitForm;
