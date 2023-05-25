import { Button } from "semantic-ui-react";

export const Login = ({ openRegister, goBack }) => {
    return (
        <div style={{backgroundColor: '#f0f'}}>
            <h1>Login</h1>

            <Button primary onClick={openRegister}>Register</Button>
            <Button secondary onClick={goBack}>Go back</Button>
        </div>
    )
}
