import styled from "styled-components";

interface BoxSelectProps {
  value: string;
  selected: boolean;
  onClick: () => void;
}

const BoxSelect = ({ value, selected, onClick }: BoxSelectProps) => {
  return (
    <Box className={selected ? "active" : ""} onClick={onClick}>
      {value}
    </Box>
  );
};

const Box = styled.li`
  width: 95px;
  height: 95px;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0 12px;
  box-sizing: border-box;

  &.active {
    background-color: ${({ theme }) => theme.primary};
    color: #ffffff;
  }
`;

export default BoxSelect;
