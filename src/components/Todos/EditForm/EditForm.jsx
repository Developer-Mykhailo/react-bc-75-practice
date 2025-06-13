import { RiSaveLine } from "react-icons/ri";
import { MdOutlineCancel } from "react-icons/md";
import s from "./EditForm.module.css";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { validationSchema } from "../../../validation/validation";
import { useDispatch } from "react-redux";
import { setCurrentToDo, updateToDo } from "../../../redux/todoSlice";

function EditForm({ text }) {
  const dispatch = useDispatch();
  const handleSumbit = ({ text }) => {
    dispatch(updateToDo(text));
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
          onClick={() => {
            dispatch(setCurrentToDo(null));
          }}
        >
          <MdOutlineCancel color="red" size="16px" />
        </button>
      </Form>
    </Formik>
  );
}

export default EditForm;
