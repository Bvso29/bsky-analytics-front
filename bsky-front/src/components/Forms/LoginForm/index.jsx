"use client"; // Adicione esta linha no topo do arquivo

// import { StyledTit001, StyledTit002 } from "@/app/variaveis";
// import { StyledCen002 } from "@/app/variaveis";
// import { StyledButton, StyledDiv, StyledDivLogin, StyledForm, StyledInput, StyledSection } from "./styled";
// import { useState } from "react";
// import axios from "axios";





// export function LoginForm() {


//     const [accountName, setAccountName] = useState('');

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await axios.get('http://api.ojaum.live/search',
//                 {
//                     body: JSON.stringify({ q: accountName }), // Converte o corpo da requisição para JSON string
//                     headers: {
//                         'Content-Type': 'application/json', // Define o tipo de conteúdo como JSON
//                         'x-api-key': 'x0hBuwhmyH1cPN2Be1ApcBgMj0Aeja3L'
//                     }
//                 }
//             );
//             console.log(response.data);
//             setUserInfo(response.data);
//         } catch (error) {
//             console.error('Erro ao buscar informações do usuário:', response.data);
//         }
//     };

//     return (
//         // <StyledCen002>
//         <StyledSection>
//             <StyledTit001>SkyLytics</StyledTit001>
//             <StyledForm onSubmit={handleSubmit}>
//                 <StyledTit002>Acesse </StyledTit002>
//                 <StyledDiv>
//                     <label htmlFor="">Nome da conta</label>
//                     <StyledInput
//                         type="text"
//                         placeholder="Digite aqui sua conta"
//                         value={accountName}
//                         onChange={(e) => setAccountName(e.target.value)}
//                     />

//                     <StyledButton type="submit">Entrar</StyledButton>
//                 </StyledDiv>
//                 <StyledDivLogin>

//                 </StyledDivLogin>
//             </StyledForm>
//         </StyledSection>
//     );
// }

"use client"; // Adicione esta linha no topo do arquivo

// import { useState } from "react";
// import { StyledButton, StyledDiv, StyledDivLogin, StyledForm, StyledInput, StyledSection } from "./styled";
// import { StyledTit001 } from "@/app/variaveis";

// import { StyledTit001, StyledTit002 } from "@/app/variaveis";
// import { StyledCen002 } from "@/app/variaveis";
// import { StyledButton, StyledDiv, StyledDivLogin, StyledForm, StyledInput, StyledSection } from "./styled";
// import { useContext, useState } from "react";
// import { AuthContext } from "../../../../providers/UserContext";
// import axios from 'axios';

// const LoginForm = () => {
//     const { setAuth } = useContext(AuthContext);
//     const [accountName, setAccountName] = useState('');
//     const [userInfo, setUserInfo] = useState(null);

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await axios.get(`http://api.ojaum.live/search?q=${accountName}`, {
//                 headers: {
//                     'Content-Type': 'application/json',
//                     'x-api-key': process.env.NEXT_PUBLIC_API_KEY
//                 }
//             });

//             const data = response.data; // Isso captura o objeto completo da resposta
//             console.log('API response data:', data);

//             // Ajuste para a estrutura de dados
//             if (data && data.data) {
//                 setUserInfo(data.data); // Acessa a propriedade `data` dentro de `response.data`
//                 setAuth(data.data); // Atualiza o estado de autenticação com o objeto correto
//                 console.log('User info set:', data.data, userInfo);
//             } else {
//                 console.error('No user data returned from API');
//             }
//         } catch (error) {
//             console.error('Erro ao buscar informações do usuário:', error);
//         }

//     };


//     return (
//         <StyledSection>
//             <StyledTit001>SkyLytics</StyledTit001>
//             <StyledForm onSubmit={handleSubmit}>
//                 <StyledTit002>Acesse </StyledTit002>
//                 <StyledDiv>
//                     <label htmlFor="">Nome da conta</label>
//                     <StyledInput
//                         type="text"
//                         placeholder="Digite aqui sua conta"
//                         value={accountName}
//                         onChange={(e) => setAccountName(e.target.value)}
//                     />
//                     <StyledButton type="submit">Entrar</StyledButton>
//                 </StyledDiv>
//                 <StyledDivLogin>
//                     {userInfo && (
//                         <div>
//                             <p>Nome: {userInfo.displayName}</p>
//                             <p>DID: {userInfo.did}</p>
//                         </div>
//                     )}
//                 </StyledDivLogin>
//             </StyledForm>
//         </StyledSection>
//     );
// };

// export default LoginForm;



// COM O WINDOW.LOCATION.HREF
// import { useState, useContext } from 'react';
// import axios from 'axios';
// import { useRouter } from 'next/router';
// import { AuthContext } from '../../../../providers/UserContext.jsx'; // Ajuste o caminho conforme necessário
// import { StyledButton, StyledDiv, StyledDivLogin, StyledForm, StyledInput, StyledSection } from "./styled";
// import { StyledTit001, StyledTit002 } from "@/app/variaveis";

// const LoginForm = () => {
//     const { auth, setAuth } = useContext(AuthContext); // Certifique-se de que auth está sendo extraído do contexto
//     const [accountName, setAccountName] = useState('');

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         if (!accountName) {
//             console.error('Account name is required');
//             return;
//         }

//         try {
//             const response = await axios.get(`http://api.ojaum.live/search?q=${accountName}`, {
//                 headers: {
//                     'Content-Type': 'application/json',
//                     'x-api-key': process.env.NEXT_PUBLIC_API_KEY // Acessa a variável de ambiente
//                 }
//             });

//             const data = response.data;
//             console.log('API response status:', response.status);
//             console.log('API response data:', data);

//             if (data) {
//                 setAuth(data.data); // Atualiza o estado de autenticação
//                 console.log('User info set:', data.data);

//                 if (auth.did) { // Verifica se o DID está presente
//                     window.location.href = '/'; // Redireciona para a rota /
//                 }
//                 console.log(auth.did)
//             } else {
//                 console.error('No data returned from API');
//             }
//         } catch (error) {
//             console.error('Erro ao buscar informações do usuário:', error);
//         }
//     };

//     return (
//         <StyledSection>
//             <StyledTit001>SkyLytics</StyledTit001>
//             <StyledForm onSubmit={handleSubmit}>
//                 <StyledTit002>Acesse </StyledTit002>
//                 <StyledDiv>
//                     <label htmlFor="">Nome da conta</label>
//                     <StyledInput
//                         type="text"
//                         placeholder="Digite aqui sua conta"
//                         value={accountName}
//                         onChange={(e) => setAccountName(e.target.value)}
//                     />
//                     <StyledButton type="submit">Entrar</StyledButton>
//                 </StyledDiv>
//                 <StyledDivLogin>
//                     {auth && (
//                         <div>
//                             <p>Nome: {auth.displayName}</p>
//                             <p>DID: {auth.did}</p>
//                         </div>
//                     )}
//                 </StyledDivLogin>
//             </StyledForm>
//         </StyledSection>
//     );
// };

// export default LoginForm;

import { useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../../../../providers/UserContext.jsx'; // Ajuste o caminho conforme necessário
import { StyledButton, StyledDiv, StyledDivLogin, StyledForm, StyledInput, StyledSection } from "./styled";
import { StyledTit001, StyledTit002 } from "@/app/variaveis";

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
            const response = await axios.get(`http://api.ojaum.live/search?q=${accountName}`, {
                headers: {
                    'Content-Type': 'application/json',
                    'x-api-key': process.env.NEXT_PUBLIC_API_KEY // Acessa a variável de ambiente
                }
            });

            const data = response.data;
            console.log('API response status:', response.status);
            console.log('API response data:', data);

            if (data) {
                setAuth(data.data); // Atualiza o estado de autenticação
                console.log('User info set:', data.data);

                if (typeof window !== 'undefined' && data.data.did) { // Verifica se o DID está presente e se está no lado do cliente
                    localStorage.setItem('auth', JSON.stringify(data.data)); // Armazena os dados do usuário no localStorage
                    window.location.href = `/dashboard`; // Redireciona para a rota dinâmica
                }
                console.log(data.data.did);
            } else {
                console.error('No data returned from API');
            }
        } catch (error) {
            console.error('Erro ao buscar informações do usuário:', error);
        }
    };

    return (
        <StyledSection>
            <StyledTit001>SkyLytics</StyledTit001>
            <StyledForm onSubmit={handleSubmit}>
                <StyledTit002>Acesse </StyledTit002>
                <StyledDiv>
                    <label htmlFor="">Nome da conta</label>
                    <StyledInput
                        type="text"
                        placeholder="Digite aqui sua conta"
                        value={accountName}
                        onChange={(e) => setAccountName(e.target.value)}
                    />
                    <StyledButton type="submit">Entrar</StyledButton>
                </StyledDiv>
                <StyledDivLogin>
                    {auth && (
                        <div>
                            <p>Nome: {auth.displayName}</p>
                            <p>DID: {auth.did}</p>
                        </div>
                    )}
                </StyledDivLogin>
            </StyledForm>
        </StyledSection>
    );
};

export default LoginForm;