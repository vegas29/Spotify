import { Button } from "semantic-ui-react";
import { User } from "../../api/user";
import { AvatarUpdate } from "../../components/Profile/AvatarUpdate";
import "./ProfilePage.scss"

export const ProfilePage = () => {

    const { getMe } = new User();

    const { displayName, email } = getMe();

    return (
        <>
            <div className="profile">
                <h1>Configuration</h1>

                <div className="profile__block">
                    <div>
                        <AvatarUpdate />
                        <span>{displayName}</span>
                    </div>
                    <Button onClick={() => console("displayName")}>Update</Button>
                </div>

                <div className="profile__block">
                    <span>Email: {email}</span>
                    <Button onClick={() => console("email")}>Update</Button>
                </div>
                <div className="profile__block">
                    <span>Password</span>
                    <Button onClick={() => console("password")}>Update</Button>
                </div>
            </div>
        </>
    )
}
