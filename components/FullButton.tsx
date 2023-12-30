import { PropsWithChildren } from "react";
import styled from "styled-components";

interface FullButtonProps {
  isPrimary: boolean;
  onClick: () => void;
}

const Arrow = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="11"
      height="18"
      viewBox="0 0 11 18"
      fill="none"
    >
      <path
        d="M1 1L9 9L1 17"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};

const FullButton = ({
  isPrimary,
  onClick,
}: PropsWithChildren<FullButtonProps>) => {
  return (
    <ButtonStyle isPrimary={isPrimary} onClick={onClick}>
      <div />
      <span>다음으로</span>
      <Arrow />
    </ButtonStyle>
  );
};

const ButtonStyle = styled.button<{ isPrimary: boolean }>`
  width: 100%;
  padding: 18px 25px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme, isPrimary }) =>
    isPrimary ? theme.primary : "#ffffff"};
  cursor: pointer;
  color: #fff;
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
`;

export default FullButton;
