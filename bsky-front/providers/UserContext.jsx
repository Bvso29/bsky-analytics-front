"use client"; // Adicione esta linha no início do arquivo
import React, { createContext, useState, useEffect } from 'react';

// Cria o contexto
export const AuthContext = createContext();

// Cria o provider
export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState(null);

    useEffect(() => {
        // Verifica se o código está sendo executado no lado do cliente
        if (typeof window !== 'undefined') {
            // Verifica se o localStorage tem o auth
            const storedAuth = localStorage.getItem('auth');
            if (storedAuth) {
                setAuth(JSON.parse(storedAuth));
                // Verifica se a rota atual é "/"
                if (window.location.pathname === '/') {
                    window.location.href = '/dashboard'; // Redireciona para /dashboard
                }
            }
        }
    }, []); // Executa o efeito apenas uma vez, quando o componente é montado

    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    );
};