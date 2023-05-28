import { useState } from "react";
import { useFormik } from "formik";
import { Form } from "semantic-ui-react"
import { initialValues, validationScheme } from "./PasswordUpdateForm.data";
import { User } from "../../../api";

import "./PasswordUpdateForm.scss";

export const PasswordUpdateForm = ({ onClose }) => {

    const [showPassword, setShowPassword] = useState(false);

    const user = new User();
    const { updateUserPassword } = user;

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: validationScheme(),
        validateOnChange: false,
        onSubmit: async ({password, newPassword}) => {
            try {
                await updateUserPassword(
                    password,
                    newPassword
                );
                onClose();
            } catch (error) {
                console.error(error);
            }
        },
    });

    return (
        <Form onSubmit={formik.handleSubmit}>
            <Form.Input
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="Current password"
                icon={{
                    name: showPassword ? "eye slash" : "eye",
                    link: true,
                    onClick: () => setShowPassword(!showPassword),
                }}
                value={formik.values.password}
                onChange={formik.handleChange}
                error={formik.errors.password}
            />
            <Form.Input
                name="newPassword"
                type={showPassword ? "text" : "password"}
                placeholder="New password"
                icon={{
                    name: showPassword ? "eye slash" : "eye",
                    link: true,
                    onClick: () => setShowPassword(!showPassword),
                }}
                value={formik.values.newPassword}
                onChange={formik.handleChange}
                error={formik.errors.newPassword}
            />
            <Form.Input
                name="repeatNewPassword"
                type={showPassword ? "text" : "password"}
                placeholder="Repeat new password"
                icon={{
                    name: showPassword ? "eye slash" : "eye",
                    link: true,
                    onClick: () => setShowPassword(!showPassword),
                }}
                value={formik.values.repeatNewPassword}
                onChange={formik.handleChange}
                error={formik.errors.repeatNewPassword}
            />

            <Form.Button type="submit" primary fluid loading={formik.isSubmitting}>
                Update password
            </Form.Button>
        </Form>
    )
}
