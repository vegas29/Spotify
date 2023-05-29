import { messages } from "../../types";

export const Alert = ({errorMessage}) => {

    let modifiedMessage = errorMessage;

    if (errorMessage === messages.FIREBASE_USER_NOT_FOUND) {
        modifiedMessage = 'User not found';
    } else if (errorMessage === messages.FIREBASE_WRONG_PASSWORD) {
        modifiedMessage = 'Wrong password';
    } else if (errorMessage === messages.FIREBASE_ALREADY_USER) {
        modifiedMessage = 'Already user';
    }

    return (
        <div className="ui red message">
            <div className="header">
                {modifiedMessage}
            </div>
        </div>
    )
}
