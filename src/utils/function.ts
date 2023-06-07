import { User } from '@react-native-google-signin/google-signin';
import { User as BaseUser } from '@/redux/types/auth.type';
import Toast from 'react-native-simple-toast';
import { ThemeMode } from '@rneui/themed';
export const isValidEmail = (email: string) => {
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return emailRegex.test(email);
};

export const isValidPassword = (password: string) => {
    return password.length >= 6;
};

export const getNowTime = () => {
    var time = new Date().getHours();
    let greeting = '';
    switch (time) {
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
        case 10: {
            greeting = 'Good morning 👋';
            break;
        }
        case 11:
        case 12:
        case 13:
        case 14:
        case 15:
        case 16:
        case 17:
        case 18: {
            greeting = 'Good afternoon 👋';
            break;
        }
        default: {
            greeting = 'Good evening 👋';
            break;
        }
    }
    return greeting;
};

export function transformUser(user: User): BaseUser {
    return {
        _id: user.user.id,
        email: user.user.email,
        password: '',
        name: user.user.name,
        photo: user.user.photo,
        familyName: user.user.familyName,
        givenName: user.user.givenName,
        idToken: user.idToken,
        username: '',
    };
}

export const capitalizeFirstLetter = (string: String) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
};

export const CustomToast = (value: string, time?: number) => {
    Toast.show(value, time || Toast.SHORT);
};

export const getMode = (mode: ThemeMode) => {
    switch (mode) {
        case 'dark':
            return true;
        case 'light':
            return false;
        default:
            return false;
    }
};
