export interface TaskInterface {
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

export interface TaskInterfaceWithID {
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
