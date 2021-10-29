import React, { createContext } from 'react';
import useFirebase from '../hooks/useFirebase';

export const AuthContext = createContext()

const Authprovider = ({childern}) => {
    const allContext = useFirebase()
    return (
        <div>
            <AuthContext.Provider value={allContext}>
            {childern}
            </AuthContext.Provider>
        </div>
    );
};

export default Authprovider;