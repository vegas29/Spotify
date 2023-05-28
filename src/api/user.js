import {
    getAuth, updateProfile
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
}