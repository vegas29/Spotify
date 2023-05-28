import { useState } from "react";
import { useFormik } from "formik";
import { initialValues, validationSchema } from "./Register.data";
import { Form, Icon } from "semantic-ui-react";
import "./Register.scss";
import { Auth } from "../../../api";
import { Alert } from "../../UI/Alert";

export const Register = ({ openLogin, goBack }) => {

    const [showPassword, setShowPassword] = useState(false);
    const [errorMessage, setErrorMessage] = useState();

    const { register } = new Auth();

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: validationSchema(),
        validateOnChange: false,
        onSubmit: async({email, password}) => {
            try {
                await register(email, password);
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
        <div className="register-form">

            <h1>Start a listen with a free spotify account</h1>

            { errorMessage && (
                <Alert errorMessage={errorMessage} />
            )}

            <Form onSubmit={formik.handleSubmit}>

                <Form.Input 
                    type="text" 
                    placeholder="Email" 
                    icon="mail outline" 
                    name="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    error={formik.errors.email}
                />

                <Form.Input 
                    type={!showPassword ? 'password' : 'text'} 
                    placeholder="Password" 
                    icon={
                        <Icon 
                            name={showPassword ? "eye slash" : "eye"} 
                            link 
                            onClick={ () => setShowPassword(!showPassword) } 
                        />
                    }
                    name="password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                    error={formik.errors.password}
                />

                <Form.Input
                    type="text"
                    placeholder="Username"
                    icon="user circle outline"
                    name="username"
                    onChange={formik.handleChange}
                    value={formik.values.username}
                    error={formik.errors.username}
                />

                <Form.Button
                    type="submit"
                    primary
                    fluid
                    loading={formik.isSubmitting}
                >
                    Continue
                </Form.Button>    
            </Form>

            <div className="register-form__options">
                <p onClick={goBack}>
                    <Icon name="angle left"/>
                    Go back
                </p>
                <p>
                    ¿Already account?
                    <span onClick={openLogin}>Sign In</span>
                </p>
            </div>
            
        </div>
    )
}
