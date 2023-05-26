import { Button } from "semantic-ui-react";
import "./AuthOptions.scss";

export const AuthOptions = ({openLogin, openRegister}) => {

    return (
        <div className="auth-options">

            <h1>Millones de canciones, en Spotify</h1>

            <Button
                className="register"
                onClick={openRegister}
            >
                Register
            </Button>

            <Button 
                className="login" 
                onClick={openLogin}
            >
                Login
            </Button>
        </div>
    )
}
