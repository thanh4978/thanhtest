import apiService from './api.service';
import { Endpoints } from './enpoints';
import { Pagination } from '@/types';

export class UserService {
    static async getUser(params: Pick<Pagination, 'page' | 'pageSize'>) {
        return await apiService.get(
            `${Endpoints.GET_USER_ENDPOINT}?page=${params.page}&pageSize=${params.pageSize}`
        );
    }
}
