import { Button } from "semantic-ui-react";

export const AuthOptions = ({openLogin, openRegister}) => {

    return (
        <div style={{backgroundColor: '#000'}}>
            <h1>AuthOptions</h1>

            <Button primary onClick={openRegister}>Register</Button>
            <Button secondary onClick={openLogin}>Login</Button>
        </div>
    )
}
