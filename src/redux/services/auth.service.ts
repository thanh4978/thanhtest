import apiService from './api.service';
import { Endpoints } from './enpoints';
import { LoginPayload } from '@/redux/types';

export class AuthService {
    static async handleLogin(payload: LoginPayload) {
        return await apiService.post(Endpoints.LOGIN_ENDPOINT, payload);
    }
}
