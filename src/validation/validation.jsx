import * as Yup from "yup";
export const validationSchema = Yup.object().shape({
  text: Yup.string()
    .min(2, "min char 2")
    .max(10, "max char 10")
    .required("todo text required"),
});
