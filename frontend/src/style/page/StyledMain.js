import styled from "styled-components";

export const StyledSection = styled.section`
    padding-top: 50px;
    display: flex;
    justify-content: space-between; // 타이틀과 선택 섹션 사이의 공간을 균등하게 분배합니다.
    align-items: flex-start; // 아이템을 컨테이너의 시작 부분에서 정렬합니다.
    flex-wrap: wrap; // 필요한 경우 아이템을 다음 줄로 넘깁니다.
`;

export const StyledSelectSection = styled.div`
    margin-top: 20px; // 타이틀 섹션 아래에 위치하도록 상단 마진을 추가합니다.
    align-self: flex-end; // 오른쪽 끝에 정렬합니다.
    max-width: 250px;
    width: 100%;
`;

export const StyledCardlistContainer = styled.div`
    margin-top: 50px;
`;

export const StyledTitleSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
    margin-top: 1rem;
    color: var(--Font);
    font-weight: bolder;
    h1 {
        font-size: 2.5rem;
    }
    h2 {
        font-size: 2.2rem;
    }
    h3 {
        font-size: 2rem;
    }

    span {
        color: var(--Pink);
    }
    div {
        display: flex;
        align-items: baseline;
        gap: 10px;
    }
    @media (max-width: 720px) {
        h1 {
            font-size: 2rem;
        }
        h2 {
            font-size: 1.8rem;
        }
        h3 {
            font-size: 1.6rem;
        }
    }
`;

export const StyledMonth = styled.h1`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    font-size: 2rem;
    margin-left: 20px;
    color: var(--Font);
`;
