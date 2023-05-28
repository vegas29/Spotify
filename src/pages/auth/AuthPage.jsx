import { useState } from "react";
import { Image } from "semantic-ui-react";
import { AuthOptions, Login, Register } from "../../components/Auth/";
import { logoWhiteSpotify } from "../../assets";

import "./AuthPage.scss";


export const AuthPage = () => {

    const [typeForm, setTypeForm] = useState(null);

    const openLogin = () => setTypeForm('login');
    const openRegister = () => setTypeForm('register');
    const goBack = () => setTypeForm(null);

    console.log('typeForm', typeForm)

    const renderForm = () => {

        if (typeForm === "login") {
            return <Login openRegister={openRegister} goBack={goBack} />
        }

        if (typeForm === "register") {
            return <Register openLogin={openLogin} goBack={goBack} />
        }

        return <AuthOptions
            openLogin={openLogin}
            openRegister={openRegister}
        />
    }

    return (
        <div className="auth">
            <div className="auth__content">
                <Image
                    src={logoWhiteSpotify}
                    alt="Spotify"
                    className="auth__content-logo"
                />
                {renderForm()}
            </div>
        </div>
    )
}
