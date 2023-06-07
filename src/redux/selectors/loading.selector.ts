import { RootState } from '@/hooks';

export const getIsLoading = (state: RootState) => state.loading.isLoading;
