import styled from "styled-components";

export const StyledCardContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    margin-top: 35px;
`;

export const StyledCard = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin: 0.5rem;
    background-color: var(--White);
    flex-basis: calc(100% - 1rem); // 모바일 뷰를 위해 기본적으로 100%

    @media (min-width: 768px) {
        flex-basis: calc(
            50% - 1rem
        ); // 태블릿 뷰에서는 2개의 카드를 한 줄에 배치
    }

    @media (min-width: 1024px) {
        flex-basis: calc(
            33.3333% - 1rem
        ); // 데스크톱 뷰에서는 3개의 카드를 한 줄에 배치
    }

    img {
        width: 100%;
        height: 300px; // 이미지의 높이를 자동으로 설정하여 비율을 유지
        object-fit: cover;
    }
`;

export const StlyedCardInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding: 1rem;

    h1 {
        font-size: 1.5rem;
        font-weight: bold;
    }
    p {
        font-size: 1rem;
        color: var(--Font);
    }
`;
