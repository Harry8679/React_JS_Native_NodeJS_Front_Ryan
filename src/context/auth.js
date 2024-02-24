import { useState, createContext } from 'react';

const AuthContext = createContext();

const AuthProvider = () => {
    const [auth, setAuth] = useState(null);
}