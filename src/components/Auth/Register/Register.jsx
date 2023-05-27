import { Button, Form, Icon } from "semantic-ui-react";
import "./Register.scss";

export const Register = ({ openLogin, goBack }) => {
    return (
        <div className="register-form">

            <h1>Start a listen with a free spotify account</h1>

            <Form>
                <Form.Input 
                    type="text" 
                    placeholder="Email" 
                    icon="mail outline" 
                    // error={true}
                />

                <Form.Input 
                    type="password" 
                    placeholder="Password" 
                    icon={<Icon name="eye" link onClick={ () => console.log('Show Password')} />}
                />

                <Form.Input
                    type="text"
                    placeholder="Username"
                    icon="user circle outline"
                />

                <Form.Button
                    type="submit"
                    primary
                    fluid
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
