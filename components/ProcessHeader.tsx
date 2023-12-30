import styled from "styled-components";

interface ProcessHeaderProps {
  currentStep: number;
  onPrev: () => void;
}

const Arrow = ({ onClick }: { onClick: () => void }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="13"
      height="22"
      viewBox="0 0 13 22"
      fill="none"
      onClick={onClick}
    >
      <path
        d="M12 1L2 11L12 21"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};
const ProcessHeader = ({ currentStep, onPrev }: ProcessHeaderProps) => {
  const totalStep = 3;
  return (
    <Container>
      <Arrow onClick={onPrev} />
      <BarFrame>
        <Bar percent={((currentStep - 1) / totalStep) * 100 - 20} />
      </BarFrame>
    </Container>
  );
};

const Container = styled.div`
  position: absolute;
  left: 22px;
  top: 20px;
  display: flex;
  align-items: center;
  gap: 30px;
`;

const BarFrame = styled.div`
  width: 270px;
  height: 5px;
  border-radius: 10px;
  background: #d9d9d9;
`;

const Bar = styled.div<{ percent: number }>`
  width: ${({ percent }) => `${percent}%`};
  height: 5px;
  border-radius: 10px;
  background: #30f;
  transition: width 1.5s cubic-bezier(0.25, 1, 0.5, 1);
`;

export default ProcessHeader;
