import styled from "styled-components";

interface InputProps {
  value: string;
  placeholder?: string;
  onChange: (text: string) => void;
}

const Input = ({ value, onChange, placeholder }: InputProps) => {
  return (
    <InputBox>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
      />
    </InputBox>
  );
};

const InputBox = styled.div`
  width: 100%;
  border-bottom: 1px solid #000000;
  padding-bottom: 10px;
  height: 40px;

  input {
    width: 100%;
    height: 30px;
    font-size: 26px;
    font-family: "pretendard", sans-serif;
    font-weight: 300;
    font-style: normal;
    margin-bottom: 0;
    padding: 0;

    &::placeholder {
      color: ${({ theme }) => theme.gray_01};
      line-height: 30px;
    }
  }
`;

export default Input;
