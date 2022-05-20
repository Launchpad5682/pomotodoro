import { Timer } from "../../components";
import { VscDebugRestart } from "react-icons/vsc";
import { AiOutlinePauseCircle, AiOutlinePlayCircle } from "react-icons/ai";
import * as Styled from "./styles";
import { useTodo } from "./useTodo";

export function Todo() {
  const {
    timer,
    timerSize,
    timerMode,
    focusTime,
    darkColor,
    shortBreakTime,
    resetTimer,
    timerSwitch,
    timerSwitchHandler,
    title,
    description,
    textColor,
    longBreakTime,
  } = useTodo();

  return (
    <Styled.FullScreen>
      <Styled.TimerContainer>
        <Styled.Circle>
          <Timer
            progress={timer.progress}
            size={timerSize}
            strokeWidth={timerSize < 400 ? 8 : 15}
            colorStrokeOne={darkColor}
            colorStrokeTwo={textColor}
            timer={`${timer.min < 10 ? `0${timer.min}` : timer.min}m:${
              timer.sec < 10 ? `0${timer.sec}` : timer.sec
            }s`}
          />
        </Styled.Circle>
        <Styled.SubtitleText>
          {timerMode === "focus"
            ? `Focus Time of ${focusTime}mins`
            : timerMode === "short"
            ? `Short Break of ${shortBreakTime}mins`
            : `Long Break of ${longBreakTime}mins`}
        </Styled.SubtitleText>
        <Styled.ButtonContainer>
          {timerSwitch ? (
            <Styled.Button onClick={timerSwitchHandler}>
              <AiOutlinePauseCircle />
              Pause
            </Styled.Button>
          ) : (
            <Styled.Button onClick={timerSwitchHandler}>
              <AiOutlinePlayCircle />
              Start
            </Styled.Button>
          )}
          <Styled.Button onClick={resetTimer}>
            <VscDebugRestart />
            Reset
          </Styled.Button>
        </Styled.ButtonContainer>
      </Styled.TimerContainer>
      <Styled.TodoDescription>
        <Styled.HeadingText>{title}</Styled.HeadingText>
        <Styled.ParagraphText>{description}</Styled.ParagraphText>
      </Styled.TodoDescription>
    </Styled.FullScreen>
  );
}
