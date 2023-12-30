import { useEffect } from "react";
import styled from "styled-components";
import Stack from "@/components/Stack";
import { useInfoStore } from "@/store/useInfoStore";
import { PageProps } from "@/types/common";
import { ClipLoader } from "react-spinners";

interface LoadingPageProps extends PageProps {}

const LoadingPage = ({ onNext }: LoadingPageProps) => {
  const name = useInfoStore((state) => state.name);
  useEffect(() => {
    setTimeout(() => {
      onNext();
    }, 3000);
  }, [onNext]);

  return (
    <Stack>
      <Box>
        <ClipLoader
          color="#30F"
          loading={true}
          size={70}
          aria-label="Loading Spinner"
        />
        <h1>
          {`${name}님을 위한 말씀을 찾고 있어요`}
          <br />
          잠시만 기다려주세요.
        </h1>
      </Box>
    </Stack>
  );
};

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  gap: 29px;

  h1 {
    color: #000;
    text-align: center;
    font-family: Pretendard;
    font-size: 20px;
    font-style: normal;
    font-weight: 300;
    line-height: 30px; /* 150% */
  }
`;

export default LoadingPage;
