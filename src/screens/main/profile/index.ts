export { default as Profile } from './Profile';
import { routes } from '@/constants';
import { Screen } from '@/types';
import EditProfile from './Edit-Profile';
import Setting from './Setting';
export const profileScreens: Screen[] = [
    {
        name: routes.EDIT_PROFILE,
        component: EditProfile,
    },
    {
        name: routes.SETTING,
        component: Setting,
    },
];
