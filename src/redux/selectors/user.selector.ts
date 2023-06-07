import { RootState } from '@/hooks';

export const getStoreUser = (state: RootState) => state.user.data;
export const getStateUser = (state: RootState) => state.user;
