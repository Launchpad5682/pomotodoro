export interface TaskInterface {
  _id: string;
  title: string;
  description: string;
  focusTime: number;
  shortBreakTime: number;
  longBreakTime: number;
  timerMode: "focus" | "short" | "long";
  breakCount: number;
  timeStamp: number | null;
  completed: boolean;
}
