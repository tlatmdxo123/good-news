import { PropsWithChildren } from "react";
import styled from "styled-components";

interface PageLayoutProps {
  button: JSX.Element;
}

const PageLayout = ({
  button,
  children,
}: PropsWithChildren<PageLayoutProps>) => {
  return (
    <Container>
      <div className="contents">{children}</div>
      {button}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 10px;
  padding-top: 118px;

  .contents {
    padding: 0 20px 60px 20px;
    flex-grow: 1;
    overflow-y: scroll;
    -ms-overflow-style: none; /* 인터넷 익스플로러 */
    scrollbar-width: none; /* 파이어폭스 */
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

export default PageLayout;
