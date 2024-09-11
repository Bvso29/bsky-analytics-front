"use client"
import React from 'react';
import LoginForm from '@/components/Forms/LoginForm/index.jsx'; // Ajuste o caminho conforme necessário
import { AuthProvider } from '../../../providers/UserContext.jsx'; // Ajuste o caminho conforme necessário

const LoginPage = () => {
    return (
        <AuthProvider>
            <LoginForm />
        </AuthProvider>
    );
};

export default LoginPage;