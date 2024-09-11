"use client"; // Adicione esta linha no início do arquivo
import React, { createContext, useState } from 'react';

// Cria o contexto
export const AuthContext = createContext();

// Cria o provider
export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState(null);

    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    );
};