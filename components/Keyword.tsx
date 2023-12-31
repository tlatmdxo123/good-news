import styled from "styled-components";

interface KeywordProps {
  value: string;
  selected: boolean;
  onClick: () => void;
}
const Keyword = ({ value, selected, onClick }: KeywordProps) => {
  return (
    <Box className={selected ? "active" : ""} onClick={onClick}>
      {value}
    </Box>
  );
};

const Box = styled.li`
  width: 150px;
  min-width: 150px;
  height: 50px;
  line-height: 50px;
  box-sizing: border-box;
  color: #ffffff;
  border-radius: 100px;
  opacity: 0.9;
  background: radial-gradient(
    199.28% 253.4% at 107.31% 131%,
    rgba(132, 89, 255, 0.61) 0%,
    rgba(165, 185, 255, 0.89) 62.5%
  );
  text-align: center;
  font-family: Pretendard;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  box-sizing: border-box;

  &.active {
    opacity: 0.8;
    line-height: 46px;
    border: 2px solid #30f;
    background: linear-gradient(
        0deg,
        rgba(66, 0, 255, 0.3) 0%,
        rgba(66, 0, 255, 0.3) 100%
      ),
      radial-gradient(
        236.33% 169.75% at 66.92% -20%,
        rgba(89, 215, 255, 0.62) 6.25%,
        rgba(162, 89, 255, 0.43) 100%
      );
  }
`;

export default Keyword;
