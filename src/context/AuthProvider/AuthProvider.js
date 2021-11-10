import React, { createContext } from 'react';
import useFirebase from '../../hook/useFirebase';
import useService from '../../hook/useService';
export const AuthContext = createContext();
const AuthProvider = ({children}) => {
    const {services} = useService();
    const Allcontext = useFirebase();
    const data = {Allcontext,services};
    return (
      <AuthContext.Provider value={data}>
          {children}
      </AuthContext.Provider>
    );
};

export default AuthProvider;