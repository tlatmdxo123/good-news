import styled from "styled-components";
import Stack from "@/components/Stack";
import PageLayout from "./PageLayout";
import FullButton from "@/components/FullButton";
import PageTitle from "@/components/PageTitle";
import { KeywordRepository } from "@/repository/KeywordRepository";
import SelectList from "@/components/SelectList";
import Keyword from "@/components/Keyword";
import { useInfoStore } from "@/store/useInfoStore";
import { PageProps } from "@/types/common";

interface ThisYearPageProps extends PageProps {}

const ThisYearPage = ({ onNext }: ThisYearPageProps) => {
  const selectedKeyword = useInfoStore((state) => state.keywordList);
  const name = useInfoStore((state) => state.name);
  const keywordList = KeywordRepository.getKeywordList();
  const selectKeyword = useInfoStore((state) => state.selectKeyword);

  const isMiniDivice = window.innerHeight < 690;

  return (
    <Stack>
      <PageLayout
        bottom={
          <>
            <SelectList
              list={keywordList}
              row={isMiniDivice ? 3 : 4}
              col={isMiniDivice ? 8 : 6}
              item={(keyword) => (
                <Keyword
                  value={keyword.label}
                  onClick={() => selectKeyword(keyword.id)}
                  selected={selectedKeyword.includes(keyword.id)}
                />
              )}
            />
            <FullButton
              isPrimary
              onClick={() => {
                if (!selectedKeyword.length) return;
                onNext();
              }}
            />
          </>
        }
      >
        <Container>
          <PageTitle
            title={`2023년은 ${name}님에게\n어떤 한해였나요?`}
            subTitle="*최대 2개까지 선택할 수 있어요"
          />
        </Container>
      </PageLayout>
    </Stack>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

export default ThisYearPage;
