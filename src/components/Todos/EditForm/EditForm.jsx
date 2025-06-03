import { RiSaveLine } from "react-icons/ri";
import { MdOutlineCancel } from "react-icons/md";
import s from "./EditForm.module.css";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { validationSchema } from "../../../validation/validation";

function EditForm({ text, updateTodo, cancelUpdateTodo }) {
  const handleSumbit = ({ text }) => {
    updateTodo(text);
  };

  return (
    <Formik
      initialValues={{ text }}
      onSubmit={handleSumbit}
      validationSchema={validationSchema}
    >
      <Form className={s.form}>
        <Field className={s.input} name="text" />
        <ErrorMessage className={s.error} name="text" component="p" />
        <button className={s.submitButton} type="submit">
          <RiSaveLine color="green" size="16px" />
        </button>
        <button
          className={s.editButton}
          type="button"
          onClick={cancelUpdateTodo}
        >
          <MdOutlineCancel color="red" size="16px" />
        </button>
      </Form>
    </Formik>
  );
}

export default EditForm;
