import { createContext } from 'react';

const zero = () => {};

export const AuthContext = createContext({
    token: null,
    userId: null,
    login: zero,
    logout: zero,
    isAuthenticated: false,
})