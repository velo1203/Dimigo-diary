import styled from "styled-components";

export const StyledCardContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start; /* 왼쪽 정렬을 위해 수정 */
    margin-top: 35px;
    padding: 0 1rem; /* 컨테이너의 좌우 패딩 */
`;
export const StyledCard = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0.5rem;
    background-color: var(--White);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* 카드에 그림자 추가 */
    overflow: hidden; /* 이미지가 카드의 모서리 반경을 따르도록 */
    transition: transform 0.2s ease-in-out; /* 호버 효과를 위한 트랜지션 */

    &:hover {
        transform: translateY(-5px); /* 호버 시 카드가 약간 위로 이동 */
        box-shadow: 0 10px 10px rgba(0, 0, 0, 0.15); /* 카드에 그림자 추가 */
    }
    @media (min-width: 720px) {
        flex-basis: calc(
            50% - 1rem
        ); /* 중간 크기의 화면에서 2개의 카드를 한 줄에 배치 */
    }

    @media (min-width: 1200px) {
        flex-basis: calc(
            33.3333% - 1rem
        ); /* 더 넓은 화면에서 3개의 카드를 한 줄에 배치 */
    }

    img {
        width: 100%;
        max-height: 250px;
    }
`;

export const StyledCardInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding: 1rem;

    h1 {
        font-size: 1.3rem; /* 제목의 글꼴 크기 조정 */
        font-weight: bold;
        margin: 0; /* 기본 마진 제거 */
        color: var(--Pink);
    }

    p {
        font-size: 1rem;
        color: var(--Font);
        margin: 0; /* 기본 마진 제거 */
    }
`;

export const StyledCardDate = styled.div`
    text-align: right;
    padding: 0 15px 15px 0;
    color: var(--Font);
`;

export const StyledCardDelete = styled.div`
    text-align: right;
    padding: 0 15px 15px 0;
`;
