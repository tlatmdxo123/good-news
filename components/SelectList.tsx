import { useEffect, useRef } from "react";
import styled from "styled-components";

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
  const ref = useRef<(HTMLDivElement | null)[]>([]);
  const gridList = Array(row)
    .fill(0)
    .map((_, idx) => {
      const startIndex = 1 + idx * col;
      const endIndex = (idx + 1) * col + 1;
      return list.slice(startIndex, endIndex);
    });

  useEffect(() => {
    ref.current.forEach((item) => {
      if (item) {
        item.scrollBy({ left: 85 });
      }
    });
  }, []);

  return (
    <div>
      {gridList.map((itemList, idx) => {
        return (
          <SelectFrame
            key={`row-${itemList[0].id}`}
            ref={(curr) => (ref.current[idx] = curr)}
          >
            <ListBox isEven={(idx + 1) % 2 === 0}>
              {itemList.map((itemData) => item(itemData))}
            </ListBox>
          </SelectFrame>
        );
      })}
    </div>
  );
};

const SelectFrame = styled.div`
  width: 100%;
  overflow-x: auto;
  white-space: nowrap;
  padding-right: 20px;
  margin-bottom: 20px;
  -webkit-user-select: text;
  -moz-user-select: text;
  -ms-user-select: text;
  user-select: text;
  -ms-overflow-style: none; /* 인터넷 익스플로러 */
  scrollbar-width: none; /* 파이어폭스 */
  &::-webkit-scrollbar {
    display: none;
  }
`;

const ListBox = styled.ul<{ isEven: boolean }>`
  display: flex;
  gap: 20px;
  padding: ${({ isEven }) => (isEven ? `0 95px` : `0 20px`)};
`;

export default SelectList;
