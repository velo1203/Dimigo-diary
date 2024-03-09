import styled from "styled-components";

export const Button = styled.button`
    min-height: 40px;
    width: ${(props) => props.width || "100px"};
    font-size: 15px;
    background-color: ${(props) =>
        props.type === "outlined" ? "var(--White)" : "var(--Pink)"};
    color: ${(props) =>
        props.type === "outlined" ? "var(--Pink)" : "var(--White)"};
    border: ${(props) =>
        props.type === "outlined" ? "1px solid var(--Pink)" : "none"};
    border-radius: 5px;
    cursor: pointer;
    outline: none;
    transition: all 0.2s ease-in-out;
    box-shadow: var(--BoxShadow);

    &:hover {
        opacity: 0.8;
    }
`;
