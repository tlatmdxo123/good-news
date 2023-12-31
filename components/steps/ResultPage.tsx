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
  const wishList = useInfoStore((state) => state.wishList);
  const letterList = KeywordRepository.getLetter(wishList[0]);
  const randomNum = Math.floor(Math.random() * 5);
  const letter = letterList[randomNum];

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
        <div>
          <Title>{letter.ko.text}</Title>
          <Info>{letter.ko.info}</Info>
        </div>
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
          <Image
            src="/share-image.png"
            height={150}
            width={246}
            alt="여러 사람 이미지"
          />
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
          <CommonButton href="https://komked.org/mklc/">사역소개</CommonButton>
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
      url: "https://good-news-gamma.vercel.app/",
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
          <a
            style={{ display: "block", height: "95px" }}
            target="blank"
            href="https://mrmweb.hsit.co.kr/v2/Member/MemberJoin.aspx?action=join&server=R%20ymWRGciEHntzyO2dIUpw=="
          >
            <ModalButton>
              <ModalBullet />
            </ModalButton>
          </a>
          <a
            target="blank"
            style={{ display: "block", height: "95px" }}
            href="https://mrmweb.hsit.co.kr/v2/Member/SupportOnce.aspx?action=once&server=R%20ymWRGciEHntzyO2dIUpw=="
          >
            <SponsorButton />
          </a>
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
  background: linear-gradient(180deg, #ebecff 0%, #e0e1fd 100%);

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

const Letter = styled.div`
  @media (max-height: 630px) {
    display: none;
  }
`;

const Title = styled.h1`
  color: #000;
  text-align: center;
  font-family: Pretendard;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: 30px; /* 136.364% */
  white-space: pre-wrap;
`;

const Info = styled.p`
  color: #000;
  text-align: center;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px; /* 111.111% */
  margin-top: 10px;
`;

const SubTitle = styled.h2`
  color: #9d9d9d;
  text-align: center;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: 20px; /* 125% */
  white-space: pre-wrap;
  margin-bottom: 10px;
`;

const SubInfo = styled.p`
  color: #9d9d9d;
  text-align: center;
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px; /* 166.667% */
`;

const IntroduceContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding-bottom: 20px;
`;

const IntroduceContents = styled.div``;

const IntroduceTitle = styled.h1`
  color: #000;
  text-align: center;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 26px; /* 130% */
`;

const IntroduceSubInfo = styled.p`
  color: #000;
  text-align: center;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 150% */
`;

const CommonCotents = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;
const CommonButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 0 20px;
`;
const CommonButton = styled.a`
  display: block;
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
      width="202"
      height="156"
      viewBox="0 0 202 156"
      fill="none"
    >
      <path
        d="M9.14686 155C38.6828 150.974 109.038 150.169 117.387 144.061C122.123 140.596 117.387 137.806 114.111 135.428C126.029 135.428 168.65 138.632 192.169 137.514C198.532 137.209 210.043 135.131 185.614 133.939C161.184 132.748 109.64 131.556 109.64 131.556L107.552 143.17C107.552 143.17 18.4686 149.425 7.44608 152.105C8.04013 141.979 1.48926 131.56 1.48926 131.56C5.36282 122.032 7.44608 101.187 2.38441 88.0844C14.3021 108.629 14.3021 133.939 14.3021 133.939C23.2414 135.131 28.9378 134.618 40.8189 130.962C59.8205 125.111 77.4997 121.247 86.7686 122.04C98.8328 123.069 104.875 128.88 104.875 128.88C104.281 118.755 92.1192 108.682 81.6378 109.227C74.505 109.597 63.0431 114.611 47.0768 122.724C36.7541 127.969 28.3072 129.177 19.6649 130.365C21.4511 115.18 2.98253 78.2554 2.98253 78.2554C21.2314 82.0048 34.5651 69.6221 49.1642 66.0475C63.7633 62.473 76.5761 65.3278 89.3849 83.851C102.198 102.374 107.858 122.622 107.858 122.622C108.753 107.136 126.033 94.6316 127.522 77.3608C120.365 51.4526 98.019 5 98.019 5C98.019 5 102.19 25.5444 99.8053 38.6469C97.4209 51.7494 89.6738 67.8287 89.6738 67.8287C97.4209 60.0859 110.23 65.1488 121.85 68.7234C133.471 72.2979 141.218 74.6768 149.262 71.4032C165.648 91.3539 194.252 124.704 194.252 124.704C179.059 127.978 166.84 125.298 152.839 122.024C138.838 118.75 124.239 117.258 112.02 125.895C161.18 127.982 194.004 129.242 194.004 129.242"
        stroke="black"
        stroke-width="1.2"
        stroke-miterlimit="10"
      />
    </svg>
  );
};
export default ResultPage;
