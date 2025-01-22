import styled from "styled-components"
export const LoadingSytle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    min-height: 350px;

    .bar {
        width: 21px;
        height: 128px;
        display: inline-block;
        transform-origin: bottom center;
        border-top-right-radius: 20px;
        border-top-left-radius: 20px;
        box-shadow: 5px 10px 20px inset rgba(52, 152, 219, 0.8);
        animation: loader 2.2s linear infinite;
    }

    .bar1 {
        animation-delay: 0.1s;
    }
    .bar2 {
        animation-delay: 0.2s;
    }
    .bar3 {
        animation-delay: 0.3s;
    }
    .bar4 {
        animation-delay: 0.4s;
    }
    .bar5 {
        animation-delay: 0.5s;
    }
    .bar6 {
        animation-delay: 0.6s;
    }
    .bar7 {
        animation-delay: 0.7s;
    }
    .bar8 {
        animation-delay: 0.8s;
    }

    @keyframes loader {
        0% {
            transform: scaleY(0.1);
            background: transparent;
        }
        50% {
            transform: scaleY(1);
            background: #3498db;
        }
        100% {
            transform: scaleY(0.1);
            background: transparent;
        }
    }
`
