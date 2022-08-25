import axios from "axios";
import { useEffect, useState } from "react";
import { TaskInterfaceWithID } from "../../components/types";
import { useAuthProvider } from "../../context/auth-context";
import { useDataProvider } from "../../context/data-context";
import { useDebounce } from "../../hooks/useDebounce";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";
import { percentageTimeLeft } from "../../utils";

export const useTodo = () => {
  const [timerSwitch, setTimerSwitch] = useState(false);
  const { token } = useAuthProvider();
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
  } = activeTask as TaskInterfaceWithID;
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
    (async () => {
      try {
        const { data, status } = await axios.put(
          `${process.env.REACT_APP_API_URI}/todo`,
          { todo: { ...updatedTasks } },
          { headers: { authorization: token } }
        );
        dispatch({
          type: "SET_ACTIVE_TASK",
          payload: {
            activeTask: {
              ...activeTask,
              timeStamp: null,
              timerMode: updatedTimerMode,
              breakCount: updatedBreakCount,
            },
          },
        });
        if (status === 200) {
          dispatch({
            type: "UPDATE_TASK",
            payload: { task: data.todo },
          });
        }
      } catch (error) {}
    })();
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
      }, 1000);
    } else {
      clearInterval(id);
    }

    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timerSwitch, timer, focusTime]);

  useEffect(() => {
    setDocumentTitle(
      `${timer.min < 10 ? `0${timer.min}` : timer.min}m:${
        timer.sec < 10 ? `0${timer.sec}` : timer.sec
      }s | Pomotodoro`
    );
  }, [setDocumentTitle, timer]);

  //saving the timestamp to database
  useEffect(() => {
    const task = tasks.filter((task) => task._id === _id);
    const updatedTask = {
      ...task[0],
      timeStamp: debouncedTimeStamp,
    };
    (async () => {
      try {
        const { data, status } = await axios.put(
          `${process.env.REACT_APP_API_URI}/todo`,
          { todo: updatedTask },
          { headers: { authorization: token } }
        );

        if (status === 200) {
          dispatch({ type: "UPDATE_TASK", payload: { task: data.todo } });
        }
      } catch (error) {}
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedTimeStamp]);

  return {
    timer,
    timerSize,
    timerMode,
    focusTime,
    darkColor,
    textColor,
    longBreakTime,
    shortBreakTime,
    resetTimer,
    timerSwitch,
    timerSwitchHandler,
    title,
    description,
  };
};
