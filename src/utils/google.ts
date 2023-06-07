import {
    GoogleSignin,
    ConfigureParams,
    User,
} from '@react-native-google-signin/google-signin';

export class GoogleService {
    static configure(config: ConfigureParams) {
        try {
            GoogleSignin.configure(config);
        } catch (err) {
            console.log(err);
        }
    }

    static async login(): Promise<User> {
        try {
            await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn();
            return userInfo;
        } catch (error) {
            console.log(error);
        }
        return {} as User;
    }

    static async currentUser(): Promise<User> {
        try {
            const userInfo = await GoogleSignin.getCurrentUser();
            if (!userInfo) return {} as User;
            return userInfo;
        } catch (error) {
            console.log(error);
        }
        return {} as User;
    }

    static async checkSignIn(): Promise<boolean> {
        try {
            const isSignedIn = await GoogleSignin.isSignedIn();
            return isSignedIn;
        } catch (err) {
            console.log(err);
        }
        return false;
    }

    static async getToken(): Promise<string | null> {
        try {
            const token = await GoogleSignin.getTokens();
            return token.accessToken;
        } catch (err) {
            console.log(err);
        }
        return null;
    }

    static async logout(): Promise<void> {
        try {
            await GoogleSignin.signOut();
        } catch (err) {
            console.log(err);
        }
    }
}
