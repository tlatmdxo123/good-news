import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";

export type SelectItem = {
  id: number;
  label: string;
};

interface SelectListProps {
  list: SelectItem[];
  item: (item: SelectItem) => JSX.Element;
  row: number;
  col: number;
}

const SelectList = ({ list, item, row, col }: SelectListProps) => {
  const gridList = Array(row)
    .fill(0)
    .map((_, idx) => {
      const startIndex = 1 + idx * col;
      const endIndex = (idx + 1) * col + 1;
      return list.slice(startIndex, endIndex);
    });

  return (
    <Container>
      {gridList.map((itemList, idx) => {
        return (
          <Swiper
            key={idx}
            spaceBetween={20}
            slidesPerView={3}
            freeMode={true}
            modules={[FreeMode]}
          >
            {itemList.map((itemData) => (
              <SwiperSlide key={itemData.id}>{item(itemData)}</SwiperSlide>
            ))}
          </Swiper>
        );
      })}
    </Container>
  );
};

const Container = styled.div`
  margin-bottom: 50px;
  .swiper-slide {
    width: 150px !important;
  }
`;

export default SelectList;
