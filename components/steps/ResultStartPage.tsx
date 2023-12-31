import styled from "styled-components";
import Stack from "@/components/Stack";
import { PageProps } from "@/types/common";

interface ResultStartPageProps extends PageProps {}

const Logo = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="95"
      height="95"
      viewBox="0 0 95 95"
      fill="none"
    >
      <rect width="95" height="95" rx="10" fill="white" />
      <path
        d="M32.3 74.5222H71.8833V69.2444H32.3317C31.1125 69.2128 29.6611 68.7299 29.6611 66.6056C29.6611 64.4813 31.1125 63.9983 32.3317 63.9667H71.8833V27.0222C71.8833 24.1115 69.5162 21.7444 66.6056 21.7444H32.3C29.1175 21.7444 24.3833 23.8529 24.3833 29.6611V66.6056C24.3833 72.4137 29.1175 74.5222 32.3 74.5222ZM29.6611 37.5778V29.6611C29.6611 27.5368 31.1125 27.0539 32.3 27.0222H66.6056V58.6889H29.6611V37.5778Z"
        fill="url(#paint0_linear_99_44)"
      />
      <path
        d="M45.4945 53.4111H50.7722V42.8556H56.05V37.5778H50.7722V32.3H45.4945V37.5778H40.2167V42.8556H45.4945V53.4111Z"
        fill="url(#paint1_linear_99_44)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_99_44"
          x1="48.1333"
          y1="21.7444"
          x2="48.1333"
          y2="112.733"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#3300FF" />
          <stop offset="1" stop-color="#3300FF" stop-opacity="0" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_99_44"
          x1="48.1333"
          y1="32.3"
          x2="48.1333"
          y2="68.6956"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#3300FF" />
          <stop offset="1" stop-color="#3300FF" stop-opacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
};

const ResultStartPage = ({ onNext }: ResultStartPageProps) => {
  return (
    <Stack>
      <Box>
        <Logo />
        <TextContainer>
          <Title>말씀이 도착했어요!</Title>
          <SubTitle>
            홍길동님을 위한 새해 말씀이 도착했어요.
            <br /> 기도하는 마음으로 함께 열어보아요.
          </SubTitle>
        </TextContainer>
        <Button onClick={onNext}>말씀보기</Button>
      </Box>
    </Stack>
  );
};

const Box = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  gap: 50px;
  background-image: url("/gradation.png");
  background-size: cover;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Title = styled.h1`
  color: #000;
  text-align: center;
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 30px; /* 125% */
`;

const SubTitle = styled.p`
  color: #454545;
  text-align: center;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 133.333% */
`;

const Button = styled.button`
  width: 200px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  border-radius: 100px;
  background: #30f;
  color: #fff;
  font-family: Pretendard;
  font-size: 22px;
  font-style: normal;
  font-weight: 500;
`;

export default ResultStartPage;
