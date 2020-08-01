import React, { createContext, } from 'react';

import useAuth from './hooks/useAuth';

const Context = createContext();

function AuthProvider({ children }) {
  const {
     login, setLogin, senha, setSenha, handleLogin, handleLogout, handleRegister
  } = useAuth();

  return (
    <Context.Provider value={{ handleRegister, login, setLogin, senha, setSenha, handleLogin, handleLogout}}>
      {children}
    </Context.Provider>
  );
}

export { Context, AuthProvider };