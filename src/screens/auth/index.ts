import { routes } from '@/constants';
import { Screen } from '@/types';

import CreateAccount from './create-account';
import Onboard from './onboard';
import SignIn from './sign-in';
import Lobby from './lobby';

export const authScreen: Screen[] = [
    {
        name: routes.ONBOARD,
        component: Onboard,
    },
    {
        name: routes.SIGN_IN,
        component: SignIn,
    },
    {
        name: routes.CREATE_ACCOUNT,
        component: CreateAccount,
    },
    {
        name: routes.LOBBY,
        component: Lobby,
    },
];
