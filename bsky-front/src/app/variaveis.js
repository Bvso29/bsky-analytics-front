// styled.js
import styled from "styled-components"

export const StyledTit001 = styled.h2`
    font-size: clamp(24px, 4vw, 30px);
    line-height: clamp(28px, 4vw, 34px);
    color: white;
`
export const StyledTit002 = styled.h2`
    font-size: clamp(20px, 4vw, 24px);
    line-height: clamp(24px, 4vw, 28px);
    color: var(--Cor000);
`

///////////////////////////////// Texto
// Fonte | Texto 001
export const StyledTex001 = styled.p`
    font-size: clamp(18px, 4vw, 20px);
    line-height: clamp(22px, 4vw, 24px);
`
// Fonte | Texto 002
export const StyledTex002 = styled.p`
    font-size: clamp(1.2rem, 4vw, 1.4rem);
    line-height: clamp(1.6rem, 4vw, 1.8rem);
`

///////////////////////////////// Assinatura
// Fonte | Assinatura
export const StyledAss001 = styled.h1`
    font-size: clamp(10px, 4vw, 12px);
    line-height: clamp(12px, 4vw, 14px);
    color: white;
`

// Fonte | Botão
export const StyledButton = styled.button`
    width: fit-content;
    padding: 10px;
    margin: 0 auto;
    font-size: clamp(20px, 4vw, 25px);
    line-height: clamp(22px, 4vw, 24px);
    font-weight: 400;
    background-color: var(--Bkg003);
    border-radius: 0 20px;
    border: 3px solid #ffffff4d;
    transition: 0.2s all linear;

    &:hover {
        background-color: var(--Bkg002Hov);
        transition: 0.2s all linear;
    }
    color: var(--Tex000);

    p {
    }
`

///////////////////////////////// Espacamento
// Espacamento 001
export const StyledCen001 = styled.div`
    width: calc(100% - 8rem);
    max-width: 163rem;
    margin: 0 auto;
    padding: 5rem 0;

    @media (max-width: 120rem) {
        width: calc(100% - 3rem);
    }
`

// Espacamento 002
export const StyledCen002 = styled.div`
    width: calc(100% - 40px);
    /* max-width: 120rem; */
    margin: 0 auto;
    /* padding: 2rem 0; */
`

// Espacamento 003
export const StyledCen003 = styled.div`
    width: calc(100% - 4rem);
    margin: 0 auto;
    max-width: 60rem;
    padding: 2rem 0;
`


// // ********* Width Medias | Site *********
// // Dispositivos | Personalizado (desktops grandes, menos de 1740px)
// @xxPer: ~"(max-width: 1739.98px)";
// // Dispositivos X-Large (desktops grandes, menos de 1440px)
// @xx: ~"(max-width: 1439.98px)";
// // Dispositivos Grandes (desktops, menos de 1200px)
// @xl: ~"(max-width: 1199.98px)";
// @laptop: @xl;
// // Dispositivos Médios (tablets, menos de 992px)
// @lg: ~"(max-width: 991.98px)";
// @tablet: @lg;
// // Dispositivos Small (telefones em paisagem, menos de 768px)
// @md: ~"(max-width: 767.98px)";
// @phone: @md;
// // Dispositivos X-Small (telefones em retrato, menos de 576px)
// @sm: ~"(max-width: 589.98px)";
