import { useState } from "react";
import { Button } from "semantic-ui-react";
import { User } from "../../api/user";
import { AvatarUpdate } from "../../components/Profile/AvatarUpdate";
import { Modal } from "../../components/Modal";
import "./ProfilePage.scss"
import { DisplayNameUpdateForm } from "../../components/Profile/DisplayNameUpdateForm";
import { EmailUpdateForm } from "../../components/Profile/EmailUpdateForm";
import { PasswordUpdateForm } from "../../components/Profile/PasswordUpdateForm";

export const ProfilePage = () => {

    const [showModal, setShowModal] = useState(false);
    const [titleModal, setTitleModal] = useState("");
    const [contentModal, setContentModal] = useState(null);

    const { getMe } = new User();

    const { displayName, email } = getMe();

    const onCloseModal = () => {
        setShowModal(false);
        setTitleModal("");
        setContentModal(null);
    };

    const openForm = (type) => {

        if (type === "displayName") {
            setTitleModal("Update name and lastname");
            setContentModal(<DisplayNameUpdateForm onClose={onCloseModal} />);
        }

        if (type === "email") {
            setTitleModal("Update email");
            setContentModal(<EmailUpdateForm onClose={onCloseModal} />);
        }

        if (type === "password") {
            setTitleModal("Update password");
            setContentModal(<PasswordUpdateForm onClose={onCloseModal} />);
        }

        setShowModal(true);
    };

    return (
        <>
            <div className="profile">
                <h1>Configuration</h1>

                <div className="profile__block">
                    <div>
                        <AvatarUpdate />
                        <span>{displayName}</span>
                    </div>
                    <Button onClick={() => openForm("displayName")}>Update</Button>
                </div>

                <div className="profile__block">
                    <span>Email: {email}</span>
                    <Button onClick={() => openForm("email")}>Update</Button>
                </div>
                <div className="profile__block">
                    <span>Password</span>
                    <Button onClick={() => openForm("password")}>Update</Button>
                </div>
            </div>

            <Modal
                show={showModal}
                onClose={onCloseModal}
                title={titleModal}
                children={contentModal}
            />
        </>
    )
}
