

"use client"; // Adicione esta linha no topo do arquivo

import { useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../../../../providers/UserContext.jsx'; // Ajuste o caminho conforme necessário
import { StyledDiv, StyledDivLogin, StyledForm, StyledSection } from "./styled";
import { StyledTex001, StyledTex002, StyledTit001 } from "../../../../style/variaveis.js";
import InputPad from '@/components/fragments/Input/index.jsx';
import ButtonPad from '@/components/fragments/Button/index.jsx';

const LoginForm = () => {
    const { auth, setAuth } = useContext(AuthContext); // Certifique-se de que auth está sendo extraído do contexto
    const [accountName, setAccountName] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!accountName) {
            console.error('Account name is required');
            return;
        }

        try {
            const response = await axios.get(`https://api.ojaum.lat/search?q=${accountName}`, {
                headers: {
                    'Content-Type': 'application/json',
                    'x-api-key': process.env.NEXT_PUBLIC_API_KEY // Acessa a variável de ambiente
                }
            });

            const data = response.data;


            if (data) {
                setAuth(data.data); // Atualiza o estado de autenticação


                if (typeof window !== 'undefined' && data.data.did) { // Verifica se o DID está presente e se está no lado do cliente
                    localStorage.setItem('auth', JSON.stringify(data.data)); // Armazena os dados do usuário no localStorage
                    window.location.href = `/dashboard`; // Redireciona para a rota dinâmica
                }
                // console.log(data.data.did);
            } else {
                console.error('No data returned from API');
            }
        } catch (error) {
            console.error('Erro ao buscar informações do usuário:', error);
        }
    };

    return (
        <StyledSection>

            <StyledTex002>Digite o perfil *@felps* (sugestão)</StyledTex002>

            <StyledForm onSubmit={handleSubmit}>
                <StyledTit001>SkyLytics</StyledTit001>
                <StyledDiv>
                    <InputPad
                        type="text"
                        placeholder="Digite o nome ou @ da conta"
                        value={accountName}
                        onChange={(e) => setAccountName(e.target.value)}
                        id={'teste'}
                    />
                    <ButtonPad type="submit" id={"But_Log"} text={"Entrar"}></ButtonPad>
                </StyledDiv>
                <StyledDivLogin>
                    {/* {auth && (
                        <div>
                            <p>Nome: {auth.displayName}</p>
                            <p>DID: {auth.did}</p>
                        </div>
                    )} */}
                </StyledDivLogin>
            </StyledForm>
        </StyledSection>
    );
};

export default LoginForm;