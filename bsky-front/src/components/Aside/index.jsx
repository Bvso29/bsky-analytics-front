// import { StyledTex001 } from "@/app/variaveis";
// import { StyledAside } from "./style";
// import LogoPerfil from "../../assets/JB_LOGO.png";
// import Image from "next/image";
// import axios from "axios";
// import { useEffect, useState } from "react";

// // Configurar a URL base do Axios
// axios.defaults.baseURL = 'http://api.ojaum.live/';

// const fetchUserInfo = async (query) => {
//     try {
//         const response = await axios.post('/search', { q: query });
//         const userInfo = response.data;
//         // Salvar o did no localStorage
//         localStorage.setItem('did', userInfo.did);
//         return userInfo;
//     } catch (error) {
//         console.error('Erro ao buscar informações do usuário:', error);
//         return null;
//     }
// };

// const fetchUserFeed = async (did, limit = 10) => {
//     try {
//         const response = await axios.post('/feed', { did, limit });
//         return response.data;
//     } catch (error) {
//         console.error('Erro ao buscar o feed do usuário:', error);
//         return null;
//     }
// };

// export function Aside() {
//     const [user, setUser] = useState(null);
//     const [feed, setFeed] = useState([]);

//     useEffect(() => {
//         const query = '@bsky'; // Substitua pelo valor da query desejada
//         fetchUserInfo(query).then(userInfo => {
//             if (userInfo) {
//                 setUser(userInfo);
//                 fetchUserFeed(userInfo.did).then(userFeed => {
//                     if (userFeed) {
//                         setFeed(userFeed);
//                     }
//                 });
//             }
//         });
//     }, []);
//     return (
//         <StyledAside>
//             <div className="Perfil">
//                 <div className="Perfil_Img_Nom">
//                     <Image src={LogoPerfil} alt="Perfil" width={50} height={50} /> {/* Usa a imagem importada com next/image */}
//                     <div className="Perfil_Inf">
//                         <StyledTex001>
//                             {user ? user.name : 'Carregando...'}
//                         </StyledTex001>
//                         <p>
//                             Kuji Phodcast
//                         </p>
//                     </div>
//                 </div>
//                 <button>+</button>
//             </div>
//             <nav className="Menu">
//                 <p>Menu</p>
//                 <ul>
//                     <li>
//                         <a href="">Overview</a>
//                     </li>
//                     {feed}
//                     <li>
//                         <a href="">Posts</a>
//                     </li>
//                 </ul>
//             </nav>
//         </StyledAside>
//     )
// }

import { StyledTex001 } from "@/app/variaveis";
import { StyledAside } from "./style";
import LogoPerfil from "../../assets/JB_LOGO.png";
import Image from "next/image";
import axios from "axios";
import { useEffect, useState } from "react";





export function Aside({ userData }) {

    const handleLogout = () => {
        localStorage.clear(); // Limpa o localStorage
        window.location.href = '/login'; // Redireciona para a página de login
    };

console.log(userData)
    return (
        <StyledAside>
            <div className="Perfil">
                <div className="Perfil_Img_Nom">
                    {userData && (
                       <Image src={userData.avatar} alt="Perfil" width={50} height={50} /> // Usa a imagem do usuário
                    )}
                    <div className="Perfil_Inf">
                        <StyledTex001>
                            <p>{userData.displayName}</p>
                        </StyledTex001>
                        <p>
                            {userData.handle}
                        </p>
                    </div>
                </div>
                <button onClick={handleLogout}>+</button>
            </div>
            <nav className="Menu">
                <p>Menu</p>
                <ul>
                    <li>
                        <a href="">Overview</a>
                    </li>

                    <li>
                        <a href="">Posts</a>
                    </li>
                </ul>
            </nav>

        </StyledAside>
    );
}