import styled, { ThemeProvider } from "styled-components";
import LoadingPage from "../components/steps/LoadingPage";
import NamePage from "../components/steps/NamePage";
import NextYearPage from "../components/steps/NextYearPage";
import ResultPage from "../components/steps/ResultPage";
import ResultStartPage from "../components/steps/ResultStartPage";
import StartPage from "../components/steps/StartPage";
import ThisYearPage from "../components/steps/ThisYearPage";
import ProcessHeader from "@/components/ProcessHeader";
import { useInfoStore } from "@/store/useInfoStore";

const theme = {
  primary: "#4200FF",
  gray_01: "#9D9D9D",
  gray_02: "#878787",
};

export default function Home() {
  const step = useInfoStore((state) => state.step);
  const setStep = useInfoStore((state) => state.moveStep);

  return (
    <ThemeProvider theme={theme}>
      <Container>
        {step >= 2 && step <= 4 && (
          <ProcessHeader currentStep={step} onPrev={() => setStep(step - 1)} />
        )}
        {step === 1 && <StartPage onNext={() => setStep(2)} />}
        {step === 2 && <NamePage onNext={() => setStep(3)} />}
        {step === 3 && <ThisYearPage onNext={() => setStep(4)} />}
        {step === 4 && <NextYearPage onNext={() => setStep(5)} />}
        {step === 5 && <LoadingPage onNext={() => setStep(6)} />}
        {step === 6 && <ResultStartPage onNext={() => setStep(7)} />}
        {step === 7 && <ResultPage />}
      </Container>
    </ThemeProvider>
  );
}

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
