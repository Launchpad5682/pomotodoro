import { useEffect, useState } from "react";
import styled from "styled-components";
import { Timer } from "../../components";
import { useDataProvider } from "../../context/data-context";
import { VscDebugRestart } from "react-icons/vsc";
import { AiOutlinePauseCircle, AiOutlinePlayCircle } from "react-icons/ai";
import { TaskInterface } from "../../components/types";
import { percentageTimeLeft } from "../../utils";
import { useDebounce } from "../../hooks/useDebounce";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";

const FullScreen = styled.div`
  min-height: 100vh;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  padding: 20px;
  box-sizing: border-box;
  justify-content: space-around;
  align-items: center;
  background: linear-gradient(${(props) => props.theme.backgroundColor});
  color: ${(props) => props.theme.textColor};
  gap: 4rem;
  @media screen and (min-width: 1200px) {
    flex-direction: row;
  }
`;

const TimerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  height: 100%;
  width: 100%;
  max-width: 30rem;
  @media screen and (min-width: 1200px) {
    gap: 4rem;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  @media screen and (min-width: 1200px) {
    flex-direction: row;
  }
`;

const Circle = styled.div`
  border-radius: 100%;
  background: linear-gradient(${(props) => props.theme.backgroundColor});
  box-shadow: ${(prop) => prop.theme.boxShadow};
  border-radius: 100%;
  min-width: fit-content;
  height: max-content;
  max-width: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 5rem;
  box-sizing: border-box;
`;

const TodoDescription = styled.div`
  width: 50rem;
  max-width: 100%;
  min-height: fit-content;
  height: 100%;
  max-height: 50rem;
  border-radius: 2.5rem;
  background: linear-gradient(${(props) => props.theme.backgroundColor});
  box-shadow: ${(prop) => prop.theme.boxShadow};
  padding: 20px;
  margin: 0 20px;
  box-sizing: border-box;
`;

const HeadingText = styled.span`
  font-size: 2.5rem;
  font-weight: 600;
  @media screen and (min-width: 1200px) {
    font-size: 3.2rem;
  }
`;

const ParagraphText = styled.p`
  font-size: 1.4rem;
  line-height: 2rem;
  @media screen and (min-width: 1200px) {
    font-size: 2rem;
    line-height: 3rem;
  }
`;

const Button = styled.button`
  background: linear-gradient(${(props) => props.theme.backgroundColor});
  box-shadow: ${(prop) => prop.theme.boxShadow};
  box-shadow: ${(prop) => prop.theme.buttonShadow};
  outline: none;
  border: 4px solid #5f5f91;
  border-radius: 10px;
  height: 3rem;
  width: 10rem;
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  color: ${(prop) => prop.theme.textColor};
  &:hover {
    box-shadow: ${(prop) => prop.theme.buttonHoverShadow};
  }
`;

const SubtitleText = styled.span`
  font-size: 1.2rem;
`;

export function Todo() {
  const [timerSwitch, setTimerSwitch] = useState(false);
  const {
    theme: { textColor, darkColor },
    activeTask,
    tasks,
    dispatch,
  } = useDataProvider();
  const [timerSize, setTimerSize] = useState(400);
  const {
    _id,
    title,
    description,
    focusTime,
    shortBreakTime,
    longBreakTime,
    timerMode,
    timeStamp,
    breakCount,
  } = activeTask as TaskInterface;
  const [timer, setTimer] = useState({
    min: 0,
    sec: 0,
    progress: 100,
    timerMode,
    breakCount,
  });
  const timerSwitchHandler = () => setTimerSwitch((prev) => !prev);

  const debouncedTimeStamp = useDebounce<number>(
    timer.min * 60 + timer.sec,
    1500
  );
  const setDocumentTitle = useDocumentTitle(`${timer.min}m:${timer.sec}s`);
  // console.log(debouncedTimeStamp, "debounced time stamp");
  const { setValue } = useLocalStorage<TaskInterface[]>(
    "tasks",
    tasks as TaskInterface[]
  );

  const [totalTime, setTotalTime] = useState(
    timerMode === "focus"
      ? focusTime
      : timerMode === "short"
      ? shortBreakTime
      : longBreakTime
  );

  const resetTimer = () =>
    setTimer((prev) => ({
      ...prev,
      min:
        timerMode === "focus"
          ? focusTime
          : timerMode === "short"
          ? shortBreakTime
          : longBreakTime,
      sec: 0,
      progress: 100,
    }));

  const nextTimer = () => {
    console.log("Next timer called");
    const updatedBreakCount =
      timerMode !== "focus" ? Number(breakCount + 1) : Number(breakCount);
    const updatedTimerMode =
      timerMode !== "focus"
        ? "focus"
        : (breakCount + 1) % 4 === 0
        ? "long"
        : "short";
    setTimer((prev) => {
      return {
        ...prev,
        breakCount: updatedBreakCount,
        timerMode: updatedTimerMode,
        min:
          timerMode === "focus"
            ? focusTime
            : timerMode === "short"
            ? shortBreakTime
            : longBreakTime,
        sec: 0,
        progress: 100,
      };
    });
    const updatedTasks = tasks.map((task) =>
      task._id === _id
        ? {
            ...task,
            timeStamp: null,
            timerMode: updatedTimerMode,
            breakCount: updatedBreakCount,
          }
        : task
    );
    setValue(updatedTasks as TaskInterface[]);
    dispatch({
      type: "SET_ACTIVE_TASK",
      payload: {
        ...activeTask,
        timeStamp: null,
        timerMode: updatedTimerMode,
        breakCount: updatedBreakCount,
      },
    });
    dispatch({ type: "SET_TASKS", payload: updatedTasks });
  };

  useEffect(() => {
    if (window.innerWidth < 500) {
      setTimerSize(window.innerWidth - 120);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth < 500) {
        setTimerSize(window.innerWidth - 120);
      } else {
        setTimerSize(400);
      }
    });

    return window.removeEventListener("resize", () => {
      setTimerSize(400);
    });
  }, []);

  // timer
  useEffect(() => {
    let time = { min: 0, sec: 0 };
    console.log(totalTime, "total time");
    setTotalTime(
      timerMode === "focus"
        ? focusTime
        : timerMode === "short"
        ? shortBreakTime
        : longBreakTime
    );

    if (timeStamp === null) {
      time.min =
        timerMode === "focus"
          ? focusTime
          : timerMode === "short"
          ? shortBreakTime
          : longBreakTime;
    } else {
      const min = Math.floor(timeStamp / 60);

      const sec = timeStamp - min * 60;

      time = { min, sec };
    }

    setTimer((prev) => ({
      ...prev,
      progress: timeStamp === null ? 100 : (timeStamp / (totalTime * 60)) * 100,
      min: time.min,
      sec: time.sec,
    }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timerMode]);

  useEffect(() => {
    let id: any = null;
    if (timerSwitch) {
      id = setInterval(() => {
        if (timer.sec === 0 && timer.min === 0) {
          setTimerSwitch(false);
          setTimer((prev) => ({
            ...prev,
            sec: 0,
            progress: 0,
          }));
          nextTimer();
        } else {
          setTimer((prev) => {
            if (prev.sec === 0 && prev.min !== 0) {
              return {
                ...prev,
                min: prev.min - 1,
                sec: 59,
                progress: percentageTimeLeft(prev.min - 1, 59, totalTime * 60),
              };
            } else {
              return {
                ...prev,
                sec: prev.sec - 1,
                progress: percentageTimeLeft(
                  prev.min,
                  prev.sec - 1,
                  totalTime * 60
                ),
              };
            }
          });
        }

        console.log(timer);
      }, 1000);
    } else {
      clearInterval(id);
    }

    return () => clearInterval(id);
  }, [timerSwitch, timer, focusTime]);

  useEffect(() => {
    setDocumentTitle(
      `${timer.min < 10 ? `0${timer.min}` : timer.min}m:${
        timer.sec < 10 ? `0${timer.sec}` : timer.sec
      }s | Pomotodoro`
    );
  }, [setDocumentTitle, timer]);

  //saving the timestamp to localStorage
  useEffect(() => {
    console.log("saving data");
    const updatedTasks = tasks.map((task) =>
      task._id === _id
        ? {
            ...task,
            timeStamp: debouncedTimeStamp,
          }
        : { ...task }
    );

    setValue(updatedTasks as TaskInterface[]);
    dispatch({ type: "SET_TASKS", payload: updatedTasks });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedTimeStamp]);

  return (
    <FullScreen>
      <TimerContainer>
        <Circle>
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
        </Circle>
        <SubtitleText>
          {timerMode === "focus"
            ? `Focus Time of ${focusTime}mins`
            : timerMode === "short"
            ? `Short Break of ${shortBreakTime}mins`
            : `Long Break of ${longBreakTime}mins`}
        </SubtitleText>
        <ButtonContainer>
          {timerSwitch ? (
            <Button onClick={timerSwitchHandler}>
              <AiOutlinePauseCircle />
              Pause
            </Button>
          ) : (
            <Button onClick={timerSwitchHandler}>
              <AiOutlinePlayCircle />
              Start
            </Button>
          )}
          <Button onClick={resetTimer}>
            <VscDebugRestart />
            Reset
          </Button>
        </ButtonContainer>
      </TimerContainer>
      <TodoDescription>
        <HeadingText>{title}</HeadingText>
        <ParagraphText>{description}</ParagraphText>
      </TodoDescription>
    </FullScreen>
  );
}
