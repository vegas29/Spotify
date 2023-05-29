import * as Yup from "yup";

export function initialValues() {
  return {
    email: "",
    password: "",
    username: "",
  };
}

export function validationSchema() {
  return Yup.object({
    email: Yup.string().email(true).required('The email is required'),
    password: Yup.string().required('The password is required').min(7),
    username: Yup.string().required('The username is required'),
  });
}