import {
    StyledHeader,
    StyledHeaderContainer,
} from "../../style/layout/StyledHeader";

function Header() {
    return (
        <StyledHeader>
            <StyledHeaderContainer>
                <h1>
                    <span>Dimigo</span> diary
                </h1>
            </StyledHeaderContainer>
        </StyledHeader>
    );
}

export default Header;
