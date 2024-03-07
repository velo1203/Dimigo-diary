import styled from "styled-components";

export const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    height: 50px;
    width: 100%;
    background-color: var(--White);
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
`;

export const StyledHeaderContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    width: 80%;
    max-width: 1200px;
    margin: 0 auto;
    h1 {
        font-size: 1.3rem;
        font-weight: 700;
    }
    span {
        color: var(--Pink);
    }
`;
