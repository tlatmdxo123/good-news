import styled from "styled-components";
import Stack from "@/components/Stack";
import FullButton from "@/components/FullButton";
import PageLayout from "./PageLayout";
import PageTitle from "@/components/PageTitle";
import { KeywordRepository } from "@/repository/KeywordRepository";
import BoxSelect from "@/components/BoxSelect";
import { useInfoStore } from "@/store/useInfoStore";
import { PageProps } from "@/types/common";

interface NextYearPageProps extends PageProps {}

const NextYearPage = ({ onNext }: NextYearPageProps) => {
  const wishList = KeywordRepository.getWishList();
  const selectedWishList = useInfoStore((state) => state.wishList);
  const selectWish = useInfoStore((state) => state.selectWishList);

  return (
    <Stack>
      <Container>
        <PageLayout
          bottom={
            <>
              <Grid>
                {wishList.map((wish) => (
                  <BoxSelect
                    key={wish.id}
                    value={wish.label}
                    onClick={() => selectWish(wish.id)}
                    selected={selectedWishList.includes(wish.id)}
                  />
                ))}
              </Grid>
              <FullButton
                isPrimary
                onClick={() => {
                  if (!selectedWishList.length) return;
                  onNext();
                }}
              />
            </>
          }
        >
          <PageTitle
            title={`2024년에는\n어떤 바람들이 있으신가요?`}
            subTitle="*최대 2개까지 선택할 수 있어요"
          />
        </PageLayout>
      </Container>
    </Stack>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  .contents {
    @media (max-height: 700px) {
      padding-top: 30px;
    }
  }
`;

const Grid = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 104px);
  grid-gap: 10px;
  justify-content: center;
  margin-bottom: 50px;

  @media (max-height: 690px) {
    margin-bottom: 20px;
  }
`;

export default NextYearPage;
