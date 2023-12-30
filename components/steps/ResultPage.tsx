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
        <CommonCotents>
          <IntroduceImageBox></IntroduceImageBox>
          <IntroduceTitle>
            콤케드는 선교사 자녀를 위한
            <br /> 사역을 하고 있습니다.
          </IntroduceTitle>
          <IntroduceSubInfo>
            선교사 자녀들은 세계 선교 완성을 위해
            <br /> 하나님께서 한국교회에 주신 선물입니다.
          </IntroduceSubInfo>
        </CommonCotents>

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
        <CommonCotents>
          <IntroduceContents>
            <BookIcon />
          </IntroduceContents>
          <IntroduceTitle>
            새해 말씀 카드는
            <br /> 어떠셨나요?
          </IntroduceTitle>
          <IntroduceSubInfo>
            아래 버튼을 선택해서
            <br /> 친구들에게도 공유해보아요!
          </IntroduceSubInfo>
        </CommonCotents>
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
        <Swiper pagination={true} modules={[Pagination]} spaceBetween={50}>
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
    padding-top: 30px;
    .swiper-slide {
      display: flex;
      justify-content: center;
    }

    .swiper-pagination-bullet-active {
      background-color: ${({ theme }) => theme.primary};
    }
  }
`;
const CardContainer = styled.div`
  width: calc(100% - 60px);
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
  width: 100%;
  height: 100%;
  padding-bottom: 20px;
`;

const IntroduceContents = styled.div`
  margin-bottom: 50px;
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
  margin-bottom: 20px;
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

const CommonCotents = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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

const BookIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="214"
      height="166"
      viewBox="0 0 214 166"
      fill="none"
    >
      <path
        d="M9.16811 165C40.6731 160.706 115.718 159.847 124.624 153.332C129.676 149.636 124.624 146.66 121.13 144.123C133.843 144.123 179.305 147.541 204.391 146.348C211.179 146.023 223.457 143.806 197.399 142.535C171.341 141.264 116.36 139.993 116.36 139.993L114.134 152.382C114.134 152.382 19.1113 159.053 7.35394 161.912C7.9876 151.111 1 139.998 1 139.998C5.1318 129.834 7.35394 107.599 1.95483 93.6233C14.667 115.537 14.667 142.535 14.667 142.535C24.2023 143.806 30.2785 143.259 42.9516 139.36C63.22 133.118 82.0778 128.997 91.9646 129.843C104.833 130.94 111.278 137.139 111.278 137.139C110.645 126.338 97.6719 115.594 86.4918 116.175C78.8835 116.57 66.6574 121.918 49.6267 130.572C38.6159 136.167 29.6058 137.456 20.3873 138.722C22.2926 122.525 2.59283 83.1391 2.59283 83.1391C22.0583 87.1385 36.2809 73.9302 51.8532 70.1174C67.4256 66.3046 81.0926 69.3496 94.7554 89.1078C108.422 108.866 114.46 130.463 114.46 130.463C115.414 113.945 133.847 100.607 135.435 82.1848C127.801 54.5494 103.965 5 103.965 5C103.965 5 108.414 26.914 105.87 40.89C103.327 54.8661 95.0635 72.0173 95.0635 72.0173C103.327 63.7583 116.99 69.1588 129.385 72.9716C141.781 76.7844 150.044 79.322 158.625 75.8301C176.102 97.1108 206.613 132.684 206.613 132.684C190.407 136.176 177.374 133.318 162.44 129.826C147.505 126.334 131.933 124.742 118.899 133.955C171.337 136.18 206.349 137.525 206.349 137.525"
        stroke="black"
        stroke-width="1.2"
        stroke-miterlimit="10"
      />
    </svg>
  );
};
export default ResultPage;
