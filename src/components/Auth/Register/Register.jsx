import { useState } from "react";
import { useFormik } from "formik";
import { initialValues, validationSchema } from "./Register.data";
import { Form, Icon } from "semantic-ui-react";
import "./Register.scss";

export const Register = ({ openLogin, goBack }) => {

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: validationSchema(),
        validateOnChange: false,
        onSubmit: (formValue) => {
            console.log(formValue)
        },
      });


    return (
        <div className="register-form">

            <h1>Start a listen with a free spotify account</h1>

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
                    type="password" 
                    placeholder="Password" 
                    icon={<Icon name="eye" link onClick={ () => console.log('Show Password')} />}
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
