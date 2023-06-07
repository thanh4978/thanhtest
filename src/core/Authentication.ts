import * as Keychain from 'react-native-keychain';

class Authentication {
    async checkSupportBiometric(): Promise<boolean> {
        const status = await Keychain.getSupportedBiometryType();
        return status !== null;
    }

    async authenticateWithBiometrics() {
        const options = {
            authenticationType: Keychain.AUTHENTICATION_TYPE.BIOMETRICS,
            authenticationPrompt: {
                title: 'Authenticate to access the secure data',
            },
        };

        const credentials: false | Keychain.UserCredentials =
            await Keychain.getGenericPassword(options);
        return credentials;
    }

    async saveCredentials({
        username,
        password,
    }: {
        username: string;
        password: string;
    }) {
        try {
            const options = {
                accessControl:
                    Keychain.ACCESS_CONTROL
                        .BIOMETRY_CURRENT_SET_OR_DEVICE_PASSCODE,
                accessible: Keychain.ACCESSIBLE.WHEN_UNLOCKED,
            };
            await Keychain.setGenericPassword(username, password, options);
            return true;
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    async getCredentials() {
        const credentials: false | Keychain.UserCredentials =
            await Keychain.getGenericPassword();
        return credentials;
    }

    async checkEnableBiometric() {
        const credentials = await this.getCredentials();
        return credentials !== false;
    }

    async removeCredentials() {
        try {
            await Keychain.resetGenericPassword();
            return true;
        } catch (error) {
            console.log(error);
            return false;
        }
    }
}

export const authentication = new Authentication();
