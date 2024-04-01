import { useNavigate } from "react-router-dom";
import {
    StyledHeader,
    StyledHeaderContainer,
} from "../../style/layout/StyledHeader";
import useAuthStore from "../../store/userStore";

function Header() {
    const navigate = useNavigate();
    const logout = useAuthStore((state) => state.logout);
    const token = useAuthStore((state) => state.token);
    return (
        <StyledHeader>
            <StyledHeaderContainer>
                <h1
                    onClick={() => {
                        navigate("/");
                    }}
                >
                    <span>Dimi</span> diary
                </h1>
                {token !== null && (
                    <div>
                        <h2
                            onClick={() => {
                                logout();
                            }}
                        >
                            logout
                        </h2>
                        <h2
                            onClick={() => {
                                navigate("/upload");
                            }}
                        >
                            upload
                        </h2>
                    </div>
                )}
                {token === null && (
                    <h2
                        onClick={() => {
                            navigate("/login");
                        }}
                    >
                        login
                    </h2>
                )}
            </StyledHeaderContainer>
        </StyledHeader>
    );
}

export default Header;
