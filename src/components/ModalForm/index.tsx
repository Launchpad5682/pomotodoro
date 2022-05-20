import { FlatButton } from "../";
import { AiOutlineClose } from "react-icons/ai";
import * as Styled from "./styles";
import { useTask } from "./useTask";

export const ModalForm = () => {
  const { taskData, edit, changeHandler, submitHandler, closeHandler } =
    useTask();

  const { title, description, focusTime, shortBreakTime, longBreakTime } =
    taskData;
  return (
    <Styled.Modal>
        <Styled.Form onSubmit={submitHandler}>
          <Styled.Close onClick={closeHandler}>
            <AiOutlineClose />
          </Styled.Close>
          <Styled.InputWrapper>
            <Styled.LabelText>Name</Styled.LabelText>
            <Styled.InputField
              name="title"
              type="text"
              placeholder="Enter the task name"
              value={title}
              onChange={changeHandler}
            />
          </Styled.InputWrapper>
          <Styled.InputWrapper>
            <Styled.LabelText>Description</Styled.LabelText>
            <Styled.TextArea
              name="description"
              placeholder="Enter a description for task"
              value={description}
              onChange={changeHandler}
            />
          </Styled.InputWrapper>
          <Styled.InputWrapper>
            <Styled.LabelText>
              Focus Time:{" "}
              {focusTime > 0 ? `${focusTime}min` : "Select a valid time"}
            </Styled.LabelText>
            <Styled.RangeSlider
              name="focusTime"
              type="range"
              min="25"
              max="60"
              step="5"
              value={focusTime}
              onChange={changeHandler}
            />
          </Styled.InputWrapper>
          <Styled.InputWrapper>
            <Styled.LabelText>
              Short Break Time:{" "}
              {shortBreakTime > 0
                ? `${shortBreakTime}min`
                : "Select a valid time"}
            </Styled.LabelText>
            <Styled.RangeSlider
              name="shortBreakTime"
              type="range"
              min="5"
              max="20"
              step="5"
              value={shortBreakTime}
              onChange={changeHandler}
            />
          </Styled.InputWrapper>
          <Styled.InputWrapper>
            <Styled.LabelText>
              Long Break Time:{" "}
              {longBreakTime > 0
                ? `${longBreakTime}min`
                : "Select a valid time"}
            </Styled.LabelText>
            <Styled.RangeSlider
              name="longBreakTime"
              type="range"
              min="5"
              max="20"
              step="5"
              value={longBreakTime}
              onChange={changeHandler}
            />
          </Styled.InputWrapper>
          <Styled.LabelText>* time in minutes</Styled.LabelText>
          <FlatButton>{edit ? "Edit Task" : "Add Task"}</FlatButton>
        </Styled.Form>
    </Styled.Modal>
  );
};
