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

const SmallLogo = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="62"
      height="13"
      viewBox="0 0 62 13"
      fill="none"
    >
      <g clip-path="url(#clip0_161_387)">
        <path
          d="M6.82665 7.70153H9.26829C9.26829 9.22288 10.5011 10.4557 12.0225 10.4557V12.8973C9.15208 12.8973 6.82532 10.5706 6.82532 7.7002L6.82665 7.70153Z"
          fill="white"
        />
        <path
          d="M0 1.32617H2.44163C2.44163 2.84752 3.67447 4.08035 5.19582 4.08035V6.52199C2.32676 6.52199 0 4.19656 0 1.32617Z"
          fill="white"
        />
        <path
          d="M6.30712 6.52199V4.08035C7.82847 4.08035 9.0613 2.84752 9.0613 1.32617H11.5029C11.5029 4.19656 9.17617 6.52199 6.30579 6.52199H6.30712Z"
          fill="white"
        />
        <path
          d="M0.301873 7.70153H2.74351C2.74351 9.22288 3.97634 10.4557 5.49769 10.4557V12.8973C2.6273 12.8973 0.300537 10.5706 0.300537 7.7002L0.301873 7.70153Z"
          fill="white"
        />
        <path d="M7.07777 0H4.47986V2.59791H7.07777V0Z" fill="white" />
        <path
          d="M12.0292 6.65575V6.63037C12.0292 4.02578 14.1289 1.91406 16.9271 1.91406C19.7254 1.91406 21.7997 4.0004 21.7997 6.60499V6.63037C21.7997 9.23495 19.7 11.3467 16.9018 11.3467C14.1035 11.3467 12.0292 9.26033 12.0292 6.65575ZM19.2339 6.65575V6.63037C19.2339 5.3214 18.2882 4.18072 16.9018 4.18072C15.5153 4.18072 14.6084 5.29468 14.6084 6.60365V6.62903C14.6084 7.938 15.554 9.07868 16.9285 9.07868C18.3029 9.07868 19.2352 7.96472 19.2352 6.65575H19.2339Z"
          fill="white"
        />
        <path
          d="M23.1086 2.09473H25.7653L27.9291 5.60624L30.0929 2.09473H32.7496V11.1654H30.2492V5.95619L27.9291 9.50644H27.877L25.5703 5.98157V11.1654H23.1086V2.09473Z"
          fill="white"
        />
        <path
          d="M34.3564 2.09473H36.8702V5.77454L39.993 2.09473H42.9729L39.5389 5.99493L43.0891 11.1654H40.0692L37.7878 7.79677L36.8675 8.8199V11.1654H34.3538V2.09473H34.3564Z"
          fill="white"
        />
        <path
          d="M43.8171 2.09473H51.1127V4.23316H46.3055V5.60624H50.6599V7.5884H46.3055V9.02693H51.1781V11.1654H43.8171V2.09473Z"
          fill="white"
        />
        <path
          d="M52.4603 2.09473H55.9585C59.1989 2.09473 61.0768 3.96068 61.0768 6.57862V6.604C61.0768 9.22194 59.1721 11.1654 55.9064 11.1654H52.459V2.09473H52.4603ZM55.9972 8.93744C57.4999 8.93744 58.4976 8.10798 58.4976 6.64407V6.61869C58.4976 5.1668 57.4999 4.32532 55.9972 4.32532H54.9741V8.93878H55.9972V8.93744Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_161_387">
          <rect width="61.0769" height="12.8987" fill="white" />
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
        <BottomContainer>
          <BottomText>한국선교사자녀교육개발원</BottomText>
          <SmallLogo />
        </BottomContainer>
      </Container>
    </Stack>
  );
};

const Container = styled.div`
  position: relative;
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
  gap: 40px;
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
  width: 250px;
  height: 50px;
  line-height: 50px;
  color: #30f;
  text-align: center;
  font-family: Pretendard;
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px; /* 109.091% */
  cursor: pointer;
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

const BottomContainer = styled.div`
  position: absolute;
  bottom: 14px;
  right: 20px;
  display: flex;
  gap: 10px;
  align-items: center;
`;
const BottomText = styled.div`
  color: #fff;
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 166.667% */
`;

export default StartPage;
