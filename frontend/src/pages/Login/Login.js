import React, { useState } from "react";
import {
    StyledError,
    StyledForm,
    StyledFormContainer,
    StyledFormHeader,
    StyledFormInputField,
    StyledFormOptions,
} from "../../style/layout/StyledForm";
import { Input } from "../../components/Input/Input";
import { Button } from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";

import useAuthStore from "../../store/userStore";
import { login } from "../../service/auth/auth";

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const setAuth = useAuthStore((state) => state.setAuth);
    const [error, setError] = useState("");
    const handleLogin = async (e) => {
        try {
            e.preventDefault();
            const response = await login(email, password);
            setAuth({ token: response.token });
            navigate("/");
        } catch (error) {
            setError(error.response.data.error);
        }
    };
    return (
        <StyledForm onSubmit={handleLogin}>
            <StyledFormContainer>
                <StyledFormHeader>
                    <h1>Dimigo</h1>
                    <p>Diary</p>
                </StyledFormHeader>
                <StyledFormInputField>
                    <Input
                        placeholder="email"
                        type="email"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <Input
                        placeholder="Password"
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {error && <StyledError>{error}</StyledError>}
                </StyledFormInputField>
                <Button type="submit" width="100%">
                    Login
                </Button>
            </StyledFormContainer>
        </StyledForm>
    );
}
export default Login;
