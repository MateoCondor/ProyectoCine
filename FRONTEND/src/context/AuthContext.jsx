// AuthContext.js

import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return localStorage.getItem('isAuthenticated') === 'true';
  });

  const [userRole, setUserRole] = useState(() => {
    return localStorage.getItem('userRole') || 'client';
  });

  const [username, setUsername] = useState(() => {
    return localStorage.getItem('username') || '';
  });

  const login = (role, username) => {
    setIsAuthenticated(true);
    localStorage.setItem('isAuthenticated', 'true');
    setUserRole(role);
    localStorage.setItem('userRole', role);
    setUsername(username);
    localStorage.setItem('username', username);
  };

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.setItem('isAuthenticated', 'false');
    setUserRole('client');
    localStorage.removeItem('userRole');
    setUsername('');
    localStorage.removeItem('username');
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, userRole, username, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
