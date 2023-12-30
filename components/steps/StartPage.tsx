import styled from "styled-components";
import Stack from "@/components/Stack";
import { useInfoStore } from "@/store/useInfoStore";
import { PageProps } from "@/types/common";

interface StartPageProps extends PageProps {}

const Logo = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="115"
      height="104"
      viewBox="0 0 115 104"
      fill="none"
    >
      <g clip-path="url(#clip0_93_34)">
        <path
          d="M33.3297 0H0.5V69.578C0.5 80.7285 9.66373 89.7692 20.966 89.7692H37.689C45.6568 89.7692 52.1159 96.1415 52.1159 104.002V89.7692V44.8857H34.7128V34.2599H52.1159V18.5339C52.1136 8.29757 43.7053 0 33.3297 0Z"
          fill="white"
        />
        <path
          d="M81.6703 0C71.2946 0 62.8864 8.29757 62.8864 18.5339V34.2599H80.2894V44.8857H62.8864V89.7692V104.002C62.8864 96.1415 69.3455 89.7692 77.3132 89.7692H94.0362C105.339 89.7692 114.502 80.7285 114.502 69.578V0H81.6726H81.6703Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_93_34">
          <rect
            width="114"
            height="104"
            fill="white"
            transform="translate(0.5)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

const StartPage = ({ onNext }: StartPageProps) => {
  const reset = useInfoStore((state) => state.reset);
  return (
    <Stack>
      <Container>
        <ContentBox>
          <Logo />
          <Title>
            콤케드와 함께 여는
            <br /> 하나님의 마음
          </Title>
          <Button
            onClick={() => {
              reset();
              onNext();
            }}
          >
            시작하기
          </Button>
        </ContentBox>
        <SubInfo>
          본 이벤트는 한국선교사자녀교육개발원 콤케드에서 제작됐습니다.
        </SubInfo>
      </Container>
    </Stack>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
    347deg,
    #5451ff 0%,
    #7176ff 45.83%,
    #c3b2ff 183.32%
  );
`;

const ContentBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
`;

const Title = styled.h1`
  color: #fff;
  text-align: center;
  font-family: Pretendard;
  font-size: 26px;
  font-style: normal;
  font-weight: 500;
  line-height: 35px; /* 134.615% */
`;

const Button = styled.button`
  border-radius: 100px;
  background: #fff;
  width: 100%;
  height: 50px;
  line-height: 50px;
  color: #30f;
  text-align: center;
  font-family: Pretendard;
  font-size: 22px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px; /* 109.091% */
`;

const SubInfo = styled.p`
  color: #fff;
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 300;
  line-height: 20px; /* 166.667% */
  margin-top: 10px;
`;
export default StartPage;
