import { Form } from "semantic-ui-react";
import { User } from "../../../api";
import { useFormik } from "formik";
import { initialValues, validationSchema } from "./DisplayNameUpdateForm.data";

import "./DisplayNameUpdateForm.scss";

export const DisplayNameUpdateForm = ({ onClose }) => {

  const user = new User();

  const { displayName, updateDisplayName } = user;

  const formik = useFormik({
    initialValues: initialValues(displayName),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      try {
        await updateDisplayName(formValue.displayName);
        onClose();
      } catch (error) {
        console.error(error);
      }
    },
  });

  return (
    <Form className="form" onSubmit={formik.handleSubmit}>
      <Form.Input
        name="displayName"
        placeholder="Name and lastname"
        value={formik.values.displayName}
        onChange={formik.handleChange}
        error={formik.errors.displayName}
      />
      <Form.Button type="submit" primary fluid loading={formik.isSubmitting}>
        Update name
      </Form.Button>
    </Form>
  )

}
