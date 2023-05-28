import { useState } from "react";
import { Form } from "semantic-ui-react"
import { useFormik } from "formik";
import { User } from "../../../api";
import { initialValues, validationSchema } from "./EmailUpdateForm.data";

import "./EmailUpdateForm.scss";
import { Alert } from "../../UI/Alert";

export const EmailUpdateForm = ({ onClose }) => {

    const [showPassword, setShowPassword] = useState(false);
    const [errorMessage, setErrorMessage] = useState();

    const user = new User();

    const { updateUserEmail } = user;

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: validationSchema(),
        validateOnChange: false,
        onSubmit: async (formValue) => {
            try {
                await updateUserEmail(
                    formValue.email,
                    formValue.password
                );
                onClose();
            } catch (error) {
                console.error(error);
                setErrorMessage(error?.message);
    
                setTimeout(() => {
                    setErrorMessage();
                }, 2000);
            }
        },
    });

    return (
        <Form onSubmit={formik.handleSubmit}>

            { errorMessage && (
                <Alert errorMessage={errorMessage} />
            )}

            <Form.Input
                name="email"
                placeholder="New email"
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.errors.email}
            />
            <Form.Input
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                icon={{
                    name: showPassword ? "eye slash" : "eye",
                    link: true,
                    onClick: () => setShowPassword(!showPassword),
                }}
                value={formik.values.password}
                onChange={formik.handleChange}
                error={formik.errors.password}
            />
            <Form.Button type="submit" fluid primary loading={formik.isSubmitting}>
                Update email
            </Form.Button>
        </Form>
    )
}
