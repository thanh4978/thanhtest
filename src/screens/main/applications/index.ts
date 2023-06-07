export { default as Applications } from './Applications';

import { routes } from '@/constants';
import { Screen } from '@/types';
import ApplicationDetail from './ApplicationDetail';
export const applicationScreens: Screen[] = [
    {
        name: routes.APPLICATION_DETAIL,
        component: ApplicationDetail,
    },
];
