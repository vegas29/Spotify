import { Link, useNavigate } from "react-router-dom";
import { Icon, Image } from "semantic-ui-react"
import { Auth, User } from "../../../api/";
import { defaultUser } from "../../../assets";
import "./TopBar.scss";

export const TopBar = () => {

    const { logout } = new Auth();
    const user = new User();

    const navigation = useNavigate();

    const { displayName, photoURL } = user.getMe();

    const alias = displayName || "My account";
    const avatar = photoURL || defaultUser;

    const goBack = () => {
        navigation(-1);
    };

    return (
        <div className="top-bar">

            <Icon name="angle left" className="top-bar__back" link onClick={goBack} />

            <div className="top-bar__right">

                <Link to="/profile">
                    <Image src={avatar} avatar />
                    <span>{alias}</span>
                </Link>

                <Icon name="power" onClick={ () => logout() } link />

            </div>
        </div>
    )
}
