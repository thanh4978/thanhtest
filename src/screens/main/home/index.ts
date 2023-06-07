import { routes } from '@/constants';
import { Screen } from '@/types';
import Notification from './Notification';
import Search from './Search';
import JobDetail from './JobDetail';

export { default as Home } from './Home';
export const homeScreens: Screen[] = [
    {
        name: routes.NOTIFICATION,
        component: Notification,
    },
    {
        name: routes.SEARCH,
        component: Search,
    },
    {
        name: routes.JOB_DETAIL,
        component: JobDetail,
    },
];
