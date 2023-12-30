import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import Stack from "@/components/Stack";
import { KeywordRepository } from "@/repository/KeywordRepository";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { useState } from "react";
import Image from "next/image";
import { useInfoStore } from "@/store/useInfoStore";

const LetterCard = () => {
  const wishList = KeywordRepository.getWishList();
  const letter = KeywordRepository.getLetter(wishList[0].id);

  return (
    <CardContainer>
      <LetterContainer>
        <ImageBox>
          <Image
            src="/letter-image.png"
            width={146}
            height={146}
            alt="물결 모양 이미지"
          />
        </ImageBox>
        <Letter>
          <Title>{letter.ko.text}</Title>
          <Info>{letter.ko.info}</Info>
        </Letter>
        <Letter>
          <SubTitle>{letter.en.text}</SubTitle>
          <SubInfo>{letter.en.info}</SubInfo>
        </Letter>
      </LetterContainer>
    </CardContainer>
  );
};

const IntroduceCard = ({ onModalOpen }: { onModalOpen: () => void }) => {
  return (
    <CardContainer>
      <IntroduceContainer>
        <div />
        <IntroduceContents>
          <IntroduceImageBox></IntroduceImageBox>
          <IntroduceTitle>
            콤케드는 선교사 자녀를 위한
            <br /> 사역을 하고 있습니다.
          </IntroduceTitle>
          <IntroduceSubInfo>
            선교사 자녀들은 세계 선교 완성을 위해
            <br /> 하나님께서 한국교회에 주신 선물입니다.
          </IntroduceSubInfo>
        </IntroduceContents>

        <CommonButtonContainer>
          <CommonButton>사역소개</CommonButton>
          <CommonButton onClick={onModalOpen}>후원하기</CommonButton>
        </CommonButtonContainer>
      </IntroduceContainer>
    </CardContainer>
  );
};

const ShareCard = () => {
  const setStep = useInfoStore((state) => state.moveStep);
  const share = () => {
    window.navigator.share({
      title: "말씀카드", // 공유될 제목
      text: "설명", // 공유될 설명
    });
  };

  return (
    <CardContainer>
      <IntroduceContainer>
        <div />
        <IntroduceContents>
          <IntroduceImageBox></IntroduceImageBox>
        </IntroduceContents>

        <CommonButtonContainer>
          <CommonButton onClick={share}>공유하기</CommonButton>
          <CommonButton onClick={() => setStep(1)}>다시하기</CommonButton>
        </CommonButtonContainer>
      </IntroduceContainer>
    </CardContainer>
  );
};

const SponsorModal = ({ close }: { close: () => void }) => {
  return (
    <Backdrop>
      <ModalContainer>
        <ModalTitle>
          아래 원하시는
          <br /> 후원 방법을 선택해주세요
        </ModalTitle>
        <ModalButtonContainer>
          <ModalButton>
            <ModalBullet />
          </ModalButton>
          <SponsorButton />
        </ModalButtonContainer>
        <ModalBottomButton onClick={close}>닫기</ModalBottomButton>
      </ModalContainer>
    </Backdrop>
  );
};

const SponsorButton = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="95"
      height="95"
      viewBox="0 0 95 95"
      fill="none"
    >
      <rect width="95" height="95" rx="10" fill="#EBECFF" />
      <circle cx="27" cy="47" r="6" fill="#3300FF" />
      <circle cx="48" cy="47" r="6" fill="#3300FF" />
      <circle cx="69" cy="47" r="6" fill="#3300FF" />
      <line
        x1="25"
        y1="47"
        x2="73"
        y2="47"
        stroke="#3300FF"
        stroke-dasharray="2 2"
      />
    </svg>
  );
};

const ResultPage = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <Stack>
      <Container>
        <Swiper pagination={true} modules={[Pagination]}>
          <SwiperSlide>
            <LetterCard />
          </SwiperSlide>
          <SwiperSlide>
            <IntroduceCard onModalOpen={() => setOpen(true)} />
          </SwiperSlide>
          <SwiperSlide>
            <ShareCard />
          </SwiperSlide>
        </Swiper>
      </Container>
      {isOpen && <SponsorModal close={() => setOpen(false)} />}
    </Stack>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 30px;
  opacity: 0.8;
  background: linear-gradient(
    192deg,
    rgba(93, 216, 255, 0.89) 0%,
    rgba(155, 47, 193, 0.38) 30.21%,
    rgba(255, 255, 255, 0) 71.87%
  );

  .swiper {
    height: 100%;
    width: 100%;
    padding-bottom: 23px;

    .swiper-pagination-bullet-active {
      background-color: ${({ theme }) => theme.primary};
    }
  }
`;
const CardContainer = styled.div`
  width: 100%;
  height: calc(100% - 26px);
  border-radius: 20px;
  background: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const LetterContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 0 40px;
`;
const ImageBox = styled.div`
  display: flex;
  justify-content: center;
`;

const Letter = styled.div``;

const Title = styled.h1`
  color: #000;
  text-align: center;
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 34px; /* 141.667% */
`;

const Info = styled.p`
  color: #000;
  text-align: center;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 111.111% */
  margin-top: 10px;
`;

const SubTitle = styled.h2`
  color: #9d9d9d;
  text-align: center;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 111.111% */
`;

const SubInfo = styled.p`
  color: #9d9d9d;
  text-align: center;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 142.857% */
`;

const IntroduceContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  padding-bottom: 20px;
`;

const IntroduceContents = styled.div`
  padding: 0 20px;
`;

const IntroduceImageBox = styled.div`
  opacity: 0.5;
  background: #f00;
  width: 100%;
  height: 250px;
`;

const IntroduceTitle = styled.h1`
  color: #000;
  text-align: center;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 26px; /* 130% */
  margin-top: 16px;
  margin-bottom: 30px;
`;

const IntroduceSubInfo = styled.p`
  color: #000;
  text-align: center;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 150% */
`;

const CommonButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 0 20px;
`;
const CommonButton = styled.button`
  border-radius: 10px;
  border: 1px solid #30f;
  background: #fff;
  padding: 15px 0;
  color: #3300ff;
  text-align: center;
  font-family: Pretendard;
  font-size: 22px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 109.091% */
`;

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100dvh;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 46px;
`;

const ModalContainer = styled.div`
  width: 300px;
  height: 360px;
  border-radius: 5px;
  background: #fff;
  padding: 30px 25px 10px 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 100;
  opacity: 1;
`;

const ModalTitle = styled.h2`
  color: #000;
  text-align: center;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 26px; /* 130% */
  margin-bottom: 49px;
`;

const ModalButtonContainer = styled.div`
  display: flex;
  flex-grow: 1;
  gap: 30px;
`;
const ModalButton = styled.div`
  width: 95px;
  height: 95px;
  border-radius: 10px;
  background: #ebecff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalBullet = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 100%;
  background-color: #3300ff;
`;

const ModalBottomButton = styled.button`
  width: 100%;
  padding: 13px 0;
  text-align: center;
  border-radius: 5px;
  background: #30f;
  color: #fff;
  font-family: Pretendard;
  font-size: 22px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 109.091% */
`;

export default ResultPage;
