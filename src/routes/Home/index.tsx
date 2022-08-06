import styled from "styled-components";
import {
  FloatingActionButton,
  Header,
  ModalForm,
  TodoList,
} from "../../components";
import { RiAddLine } from "react-icons/ri";
import { useDataProvider } from "../../context/data-context";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";

const FullScreen = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0;
  box-sizing: border-box;
  overflow-y: hidden;
  background: linear-gradient(${(props) => props.theme.backgroundColor});
  color: ${(props) => props.theme.textColor};
`;

export const Home = () => {
  const { modal, dispatch } = useDataProvider();
  const createTask = () =>
    dispatch({
      type: "TOGGLE_MODAL",
      payload: { modal: { visible: true, edit: false } },
    });

  useDocumentTitle("Pomotodoro | Home");

  return (
    <FullScreen>
      <Header />
      <TodoList />
      <FloatingActionButton handler={createTask}>
        <RiAddLine />
      </FloatingActionButton>
      {modal.visible && <ModalForm />}
    </FullScreen>
  );
};
