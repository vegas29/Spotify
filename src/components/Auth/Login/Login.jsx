import { useState } from "react";
import { useFormik } from "formik";
import { Form, Icon } from "semantic-ui-react";
import { Auth } from "../../../api";
import { initialValues, validationSchema } from "./Login.data";
import "./Login.scss";
import { Alert } from "../../UI/Alert";

export const Login = ({ openRegister, goBack }) => {

    const [showPassword, setShowPassword] = useState(false);
    const [errorMessage, setErrorMessage] = useState();

    const { login } = new Auth();

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: validationSchema(),
        validateOnChange: false,
        onSubmit: async (formValue) => {
          try {
            await login(formValue.email, formValue.password);
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
        <div className="login-form">

            <h1>Music for all</h1>

            { errorMessage && (
                <Alert errorMessage={errorMessage} />
            )}

            <Form onSubmit={formik.handleSubmit}>

                <Form.Input
                    name="email"
                    type="text"
                    placeholder="Email"
                    icon="mail outline"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    error={formik.errors.email}
                />

                <Form.Input
                    name="password"
                    type={!showPassword ? 'password' : 'text'} 
                    placeholder="Contraseña"
                    icon={
                        <Icon
                            name={showPassword ? "eye slash" : "eye"}
                            link
                            onClick={ () => setShowPassword(!showPassword) }
                        />
                    }
                    onChange={formik.handleChange}
                    value={formik.values.password}
                    error={formik.errors.password}
                />

                <Form.Button 
                    type="submit" 
                    primary 
                    fluid 
                    loading={formik.isSubmitting}
                >
                    Sign In
                </Form.Button>

            </Form>

            <div className="login-form__options">
                <p onClick={goBack}>
                    <Icon name="angle left"/>
                    Go back
                </p>
                <p>
                    ¿Don't have a account? <span onClick={openRegister}>Register now!</span>
                </p>
            </div>

        </div>
    );
};
