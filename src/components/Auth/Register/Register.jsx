import { Button } from "semantic-ui-react";

export const Register = ({ openLogin, goBack }) => {
    return (
        <div style={{backgroundColor: '#f00'}}>
            <h1>Register</h1>

            <Button primary onClick={openLogin}>Login</Button>
            <Button secondary onClick={goBack}>Go back</Button>
        </div>
    )
}
