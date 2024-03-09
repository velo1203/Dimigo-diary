import React, { useEffect, useState } from "react";
import useAuthStore from "../../store/userStore";
import {
    StyledForm,
    StyledFormContainer,
    StyledFormHeader,
    StyledFormInputField,
} from "../../style/layout/StyledForm";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button/Button";
import { Input } from "../../components/Input/Input";
import { uploadPhoto } from "../../service/photo/photo";

function Upload() {
    const navigate = useNavigate();
    const token = useAuthStore((state) => state.token);

    // 사진 제목, 설명, 파일을 위한 상태 설정
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [file, setFile] = useState(null);

    useEffect(() => {
        if (!token) navigate("/login");
    }, [token, navigate]);

    // 입력 필드 변경 시 상태 업데이트
    const handleTitleChange = (e) => setTitle(e.target.value);
    const handleDescriptionChange = (e) => setDescription(e.target.value);
    const handleFileChange = (e) => setFile(e.target.files[0]); // 파일 입력은 files 배열에서 첫 번째 파일을 선택

    // 폼 제출 시 실행할 함수
    const handleSubmit = (e) => {
        e.preventDefault(); // 폼의 기본 제출 동작 방지
        // uploadPhoto 함수를 사용하여 사진 업로드
        uploadPhoto({ title, description, file })
            .then(() => {
                navigate("/");
            })
            .catch((error) => {
                console.error("Upload Error:", error);
            });
    };

    return (
        <StyledForm onSubmit={handleSubmit}>
            <StyledFormContainer>
                <StyledFormHeader>
                    <h1>Upload</h1>
                    <p>Photo</p>
                </StyledFormHeader>
                <StyledFormInputField>
                    <Input
                        placeholder="Photo title"
                        type="text"
                        value={title}
                        onChange={handleTitleChange}
                    />
                    <Input
                        placeholder="Photo description"
                        type="text" // 설명 입력란의 type을 'text'로 변경
                        value={description}
                        onChange={handleDescriptionChange}
                    />
                    <Input
                        placeholder="Select photo"
                        type="file"
                        onChange={handleFileChange}
                    />
                </StyledFormInputField>
                <Button width="100%" type="submit">
                    Upload
                </Button>
            </StyledFormContainer>
        </StyledForm>
    );
}

export default Upload;
