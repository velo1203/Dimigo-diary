import {
    StlyedCardInfo,
    StyledCard,
    StyledCardContainer,
    StyledCardDate,
} from "../../components/card/Card";
import { StyledDefaultPage } from "../../style/layout/StyledDefaultPage";
import {
    StyeldTitleSection,
    StyledCardSection,
    StyledMonth,
    StyledSection,
    StyledTitleSection,
} from "../../style/page/StyledMain";

function Home() {
    return (
        <StyledDefaultPage>
            <StyledSection>
                <StyeldTitleSection>
                    <h1>1학년 4반의</h1>
                    <h1>
                        <span>디미고</span>생활 순간을
                    </h1>
                    <h1>같이 기록해요</h1>
                </StyeldTitleSection>
            </StyledSection>
            <StyledMonth>2204년 3월</StyledMonth>
            <StyledCardContainer>
                <StyledCard>
                    <img src="http://localhost:8080/photos/9cc61941-e0fd-4446-8c5a-4eb1c310cb45.jpg" />
                    <StlyedCardInfo>
                        <h1>디미고에 첫 입학한 나</h1>
                        <p>완전신남</p>
                    </StlyedCardInfo>
                </StyledCard>
            </StyledCardContainer>
        </StyledDefaultPage>
    );
}

export default Home;
