import { FlatButton } from "../";
import { AiOutlineClose } from "react-icons/ai";
import { useDataProvider } from "../../context/data-context";
import * as Styled from "./styles";

type Props = {};

export const ModalForm = ({}: Props) => {
  const { dispatch } = useDataProvider();
  const closeHandler = () => dispatch({ type: "TOGGLE_MODAL", payload: false });

  return (
    <Styled.Modal>
      <Styled.Form>
        <Styled.Close onClick={closeHandler}>
          <AiOutlineClose />
        </Styled.Close>
        <Styled.InputWrapper>
          <Styled.LabelText>Name</Styled.LabelText>
          <Styled.InputField type="text" placeholder="Enter the task name" />
        </Styled.InputWrapper>
        <Styled.InputWrapper>
          <Styled.LabelText>Description</Styled.LabelText>
          <Styled.TextArea placeholder="Enter a description for task" />
        </Styled.InputWrapper>
        <Styled.InputWrapper>
          <Styled.LabelText>Focus Time</Styled.LabelText>
          <Styled.RangeSlider type="range" min="5" max="60" step="5" />
        </Styled.InputWrapper>
        <Styled.InputWrapper>
          <Styled.LabelText>Short Break Time</Styled.LabelText>
          <Styled.RangeSlider type="range" min="5" max="60" step="5" />
        </Styled.InputWrapper>
        <Styled.InputWrapper>
          <Styled.LabelText>Long Break Time</Styled.LabelText>
          <Styled.RangeSlider type="range" min="10" max="60" step="5" />
        </Styled.InputWrapper>
        <Styled.LabelText>* time in minutes</Styled.LabelText>
        <FlatButton>Submit</FlatButton>
      </Styled.Form>
    </Styled.Modal>
  );
};
