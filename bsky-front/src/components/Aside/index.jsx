
import { StyledTex001 } from "@/app/variaveis";
import { StyledAside } from "./style";
import Image from "next/image";

export function Aside({ userData }) {

    const handleLogout = () => {
        localStorage.clear(); // Limpa o localStorage
        window.location.href = '/'; // Redireciona para a página de login
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
                            {userData.displayName}
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