import * as Yup from "yup";

export function initialValues() {
  return {
    image: null,
    name: "",
    artist: "",
  };
}

export function validationSchema() {
  return Yup.object({
    image: Yup.string().required(true),
    name: Yup.string().required('The name is required'),
    artist: Yup.string().required('The artist is required'),
  });
}