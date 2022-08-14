import {
  FloatingActionButton,
  Header,
  ModalForm,
  TodoList,
} from "../../components";
import { RiAddLine } from "react-icons/ri";
import { useDataProvider } from "../../context/data-context";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";
import * as Common from "../../styles/common";

export const Home = () => {
  const { modal, dispatch } = useDataProvider();
  const createTask = () =>
    dispatch({
      type: "TOGGLE_MODAL",
      payload: { modal: { visible: true, edit: false } },
    });

  useDocumentTitle("Pomotodoro | Home");

  return (
    <Common.FullScreen>
      <Header />
      <TodoList />
      <FloatingActionButton handler={createTask}>
        <RiAddLine />
      </FloatingActionButton>
      {modal.visible && <ModalForm />}
    </Common.FullScreen>
  );
};
