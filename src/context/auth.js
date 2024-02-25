import { useState, useEffect, createContext } from 'react';
import { getFromLocalStorage } from '../helpers/auth.helper';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState(null);

    useEffect(() => {
        let value = getFromLocalStorage('auth');
        setAuth(value);
    }, []);

    return (
        <AuthContext.Provider value={[auth, setAuth]}>
            {children}
        </AuthContext.Provider>
    );
}

export { AuthContext, AuthProvider };