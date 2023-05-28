import {
    EmailAuthProvider,
    getAuth, reauthenticateWithCredential, updateEmail, updatePassword, updateProfile
} from "firebase/auth";

export class User {
    getMe() {
        return getAuth().currentUser;
    }

    async updateAvatarUser(url) {
        try {
            const auth = getAuth();
            const { currentUser } = auth;
            await updateProfile(currentUser, {
                photoURL: url
            })
        } catch (error) {
            throw error;
        }
    }

    async updateDisplayName(displayName) {
        try {
            const auth = getAuth();
            await updateProfile(auth.currentUser, {
                displayName,
            });
        } catch (error) {
            throw error;
        }
    }

    async updateUserEmail(newEmail, password) {
        try {
            const auth = getAuth();
            const { currentUser } = auth;
            const email = currentUser.email;

            const credentials = EmailAuthProvider.credential(email, password);
            await reauthenticateWithCredential(currentUser, credentials);
            await updateEmail(currentUser, newEmail);
        } catch (error) {
            throw error;
        }
    }

    async updateUserPassword(password, newPassword) {
        try {
            const auth = getAuth();
            const { currentUser } = auth;
            const email = currentUser.email;

            const credential = EmailAuthProvider.credential(email, password);
            await reauthenticateWithCredential(currentUser, credential);
            await updatePassword(currentUser, newPassword);
        } catch (error) {
            throw error;
        }
    }
}