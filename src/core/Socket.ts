import { CLIENT } from '@/constants';
import { io } from 'socket.io-client';

export const Socket = io(CLIENT);
