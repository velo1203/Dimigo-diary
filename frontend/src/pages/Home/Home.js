import { useEffect, useState } from "react";
import {
    StyledCardInfo,
    StyledCard,
    StyledCardContainer,
    StyledCardDate,
    StyledCardDelete,
} from "../../components/card/Card";
import { StyledDefaultPage } from "../../style/layout/StyledDefaultPage";
import {
    StyledCardSection,
    StyledCardlistContainer,
    StyledMonth,
    StyledSection,
    StyledSelectSection,
    StyledTitleSection,
} from "../../style/page/StyledMain";
import { deletePhoto, getPhotos } from "../../service/photo/photo";
import React from "react";
import { Select } from "../../components/Select/Select";
import { Button } from "../../components/Button/Button";
import useAuthStore from "../../store/userStore";

function Home() {
    const [photosByMonth, setPhotosByMonth] = useState({});
    const [selectedMonth, setSelectedMonth] = useState("");
    const [changeColor, setChangeColor] = useState(false); // [1
    const [changevent, setChangevent] = useState(true);
    const token = useAuthStore((state) => state.token);
    useEffect(() => {
        getPhotos().then((response) => {
            const groupedByMonth = response.reduce((acc, photo) => {
                const month = new Date(photo.createdAt).getMonth() + 1; // 월은 0부터 시작하므로 1을 더해줍니다.
                if (!acc[month]) {
                    acc[month] = [];
                }
                acc[month].push(photo);
                return acc;
            }, {});

            setPhotosByMonth(groupedByMonth);
        });
    }, [token, changevent]);
    const handleDeletePhoto = (photoId) => {
        // 삭제 확인을 위한 팝업
        const isConfirmed = window.confirm("사진을 삭제하시겠습니까?");
        if (isConfirmed) {
            deletePhoto(photoId).then(() => {
                setChangevent(!changevent);
            });
        }
    };

    const handleMonthChange = (event) => {
        setSelectedMonth(event.target.value);
    };

    useEffect(() => {
        const colors = [
            "rgb(255, 0, 0)", // 빨강
            "rgb(255, 165, 0)", // 주황
            "rgb(255, 255, 0)", // 노랑
            "rgb(0, 128, 0)", // 초록
            "rgb(0, 0, 255)", // 파랑
            "rgb(0, 0, 128)", // 남색
            "rgb(128, 0, 128)", // 보라
        ];
        let colorIndex = 0;

        function changeBackground() {
            if (!changeColor) return;
            const color = colors[colorIndex];
            document.documentElement.style.setProperty("--Pink", color);
            document.body.style.backgroundColor = color;
            colorIndex = (colorIndex + 1) % colors.length;
        }

        // 주기적으로 색상 변경
        const intervalId = setInterval(changeBackground, 1); // 1000ms = 1초

        // 컴포넌트가 unmount될 때 interval clear
        return () => clearInterval(intervalId);
    }, [changeColor]);

    return (
        <StyledDefaultPage>
            <StyledSection>
                <StyledTitleSection>
                    <h3>
                        Beginning in <span>2024</span>
                    </h3>
                    <h1>
                        <span>디</span>지털 <span>미</span>디어 <span>고</span>
                        등학교
                    </h1>
                    <div>
                        <h1>1학년 4반의</h1>
                        <h2>순간들</h2>
                        <h2
                            style={{ color: "var(--Pink)" }}
                            onClick={() => {
                                setChangeColor(true);
                            }}
                        >
                            여기를 누르세요!
                        </h2>
                    </div>
                </StyledTitleSection>
                <StyledSelectSection>
                    <Select value={selectedMonth} onChange={handleMonthChange}>
                        <option value="">모든 월</option>
                        {Array.from({ length: 12 }, (_, i) => (
                            <option key={i + 1} value={i + 1}>
                                {i + 1}월
                            </option>
                        ))}
                    </Select>
                </StyledSelectSection>
            </StyledSection>

            {selectedMonth ? (
                <StyledCardlistContainer>
                    <StyledMonth>{selectedMonth}월</StyledMonth>
                    <StyledCardContainer>
                        {photosByMonth[selectedMonth]?.map((photo) => (
                            <StyledCard key={photo.id}>
                                <img src={`/static/photos/${photo.filename}`} />
                                <StyledCardInfo>
                                    <h1>{photo.title}</h1>
                                    <p>{photo.description}</p>
                                </StyledCardInfo>
                                <StyledCardDate>
                                    {photo.createdAt}
                                </StyledCardDate>
                            </StyledCard>
                        ))}
                    </StyledCardContainer>
                </StyledCardlistContainer>
            ) : (
                Object.keys(photosByMonth)
                    .sort((a, b) => b - a)
                    .map((month) => (
                        <StyledCardlistContainer key={month}>
                            <StyledMonth>{month}월</StyledMonth>
                            <StyledCardContainer>
                                {photosByMonth[month].map((photo) => (
                                    <StyledCard key={photo.id}>
                                        <img
                                            src={`/static/photos/${photo.filename}`}
                                            alt={photo.title}
                                        />
                                        <StyledCardInfo>
                                            <h1>{photo.title}</h1>
                                            <p>{photo.description}</p>
                                        </StyledCardInfo>
                                        <StyledCardDate>
                                            {photo.createdAt}
                                        </StyledCardDate>
                                        {token && (
                                            <StyledCardDelete>
                                                <Button
                                                    onClick={() =>
                                                        handleDeletePhoto(
                                                            photo.id
                                                        )
                                                    }
                                                >
                                                    삭제
                                                </Button>
                                            </StyledCardDelete>
                                        )}
                                    </StyledCard>
                                ))}
                            </StyledCardContainer>
                        </StyledCardlistContainer>
                    ))
            )}
        </StyledDefaultPage>
    );
}

export default Home;
