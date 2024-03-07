import styled from "styled-components";

export const StyledSection = styled.div`
    padding: 50px;
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
`;

export const StyeldTitleSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
    margin-top: 1rem;
    color: var(--Font);
    h1 {
        font-weight: bolder;
        font-size: 2.5rem;
    }

    span {
        color: var(--Pink);
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
