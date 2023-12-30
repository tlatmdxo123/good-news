import styled from "styled-components";

interface PageTitleProps {
  title: string;
  subTitle?: string;
}

const PageTitle = ({ title, subTitle }: PageTitleProps) => {
  return (
    <div>
      <Title>{title}</Title>
      {subTitle && <SubTitle>{subTitle}</SubTitle>}
    </div>
  );
};

const Title = styled.h1`
  color: #000000;
  line-height: 36px;
  font-size: 26px;
  font-family: "pretendard", sans-serif;
  font-weight: 300;
  font-style: normal;
  white-space: pre-wrap;
`;

const SubTitle = styled.p`
  font-size: 16px;
  font-family: "pretendard", sans-serif;
  font-weight: 300;
  font-style: normal;
  line-height: 24px;
  color: ${({ theme }) => theme.gray_01};
  margin-top: 10px;
`;

export default PageTitle;
