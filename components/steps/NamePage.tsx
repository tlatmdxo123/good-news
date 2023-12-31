import styled from "styled-components";
import PageTitle from "@/components/PageTitle";
import PageLayout from "./PageLayout";
import FullButton from "@/components/FullButton";
import Stack from "@/components/Stack";
import Input from "@/components/Input";
import { useInfoStore } from "@/store/useInfoStore";
import { PageProps } from "@/types/common";

interface NamePageProps extends PageProps {}

const NamePage = ({ onNext }: NamePageProps) => {
  const name = useInfoStore((state) => state.name);
  const updateName = useInfoStore((state) => state.updateName);

  return (
    <Stack>
      <PageLayout
        bottom={
          <FullButton
            isPrimary
            onClick={() => {
              if (!name) return;
              onNext();
            }}
          />
        }
      >
        <Container>
          <PageTitle title={`안녕하세요.\n제가 어떻게 부르면 좋을까요?`} />

          <InputWrapper>
            <Input
              placeholder="닉네임을 입력해주세요"
              onChange={updateName}
              value={name}
            />
          </InputWrapper>
        </Container>
      </PageLayout>
    </Stack>
  );
};

const Container = styled.div`
  height: 100%;
  padding-right: 30px;
  padding-left: 10px;
`;

const InputWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 170px;
`;

export default NamePage;
