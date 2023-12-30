import { PropsWithChildren } from "react";
import styled from "styled-components";
import ProcessHeader from "../ProcessHeader";
import { useInfoStore } from "@/store/useInfoStore";

interface PageLayoutProps {
  bottom: JSX.Element;
}

const PageLayout = ({
  bottom,
  children,
}: PropsWithChildren<PageLayoutProps>) => {
  const step = useInfoStore((state) => state.step);
  const setStep = useInfoStore((state) => state.moveStep);

  return (
    <Container>
      <ProcessHeader currentStep={step} onPrev={() => setStep(step - 1)} />
      <div className="contents">{children}</div>
      {bottom}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 30px 0 10px 0;

  .contents {
    padding: 70px 20px 60px 20px;
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
