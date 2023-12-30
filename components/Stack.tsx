import { PropsWithChildren } from "react";
import Styled from "styled-components";

const Stack = ({ children }: PropsWithChildren) => {
  return <Container>{children}</Container>;
};

const Container = Styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width:450px;
    min-width: 360px;
    width: 100%;
    height: 100dvh;
`;

export default Stack;
