import { darkTheme, lightTheme } from "../../themes/themes";
import { reducer } from "../reducer";
import { TaskInterface, TaskInterfaceWithID } from "../../components/types";

let initialState = {
  theme: lightTheme,
  modal: { visible: false, edit: false },
  tasks: [],
  activeTask: null,
};

beforeEach(() => {
  console.log("Setting initial state to default");
  initialState = {
    theme: lightTheme,
    modal: { visible: false, edit: false },
    tasks: [],
    activeTask: null,
  };
});

describe("Testing reducer for the application", () => {
  it("Toggle to Dark Theme", () => {
    const finalState = reducer(initialState, {
      type: "TOGGLE_THEME",
      payload: { theme: darkTheme },
    });

    expect(finalState).toEqual({
      theme: { ...darkTheme },
      modal: { visible: false, edit: false },
      tasks: [],
      activeTask: null,
    });
  });

  it("Toggle Modal On", () => {
    const finalState = reducer(initialState, {
      type: "TOGGLE_MODAL",
      payload: { modal: { visible: true, edit: false } },
    });

    expect(finalState).toEqual({
      theme: { ...lightTheme },
      modal: { visible: true, edit: false },
      tasks: [],
      activeTask: null,
    });
  });

  it("Toggle Modal Off", () => {
    const finalState = reducer(initialState, {
      type: "TOGGLE_MODAL",
      payload: { modal: { visible: false, edit: false } },
    });

    expect(finalState).toEqual({
      theme: { ...lightTheme },
      modal: { visible: false, edit: false },
      tasks: [],
      activeTask: null,
    });
  });

  it("Set tasks", () => {
    const finalState = reducer(initialState, {
      type: "SET_TASKS",
      payload: { tasks: [] },
    });

    expect(finalState).toEqual({
      theme: { ...lightTheme },
      modal: { visible: false, edit: false },
      tasks: [],
      activeTask: null,
    });
  });

  it("Add task", () => {
    const task: TaskInterfaceWithID = {
      _id: "v41322",
      title: "Learn Typescript",
      description: "",
      focusTime: 30,
      shortBreakTime: 5,
      longBreakTime: 20,
      timerMode: "focus",
      breakCount: 4,
      timeStamp: 320000,
      completed: true,
    };

    const finalState = reducer(initialState, {
      type: "ADD_TASK",
      payload: { task: { ...task } },
    });

    expect(finalState).toEqual({
      theme: { ...lightTheme },
      modal: { visible: false, edit: false },
      tasks: [{ ...task }],
      activeTask: null,
    });
  });

  it("Set active task", () => {
    const task: TaskInterfaceWithID = {
      _id: "v41322",
      title: "Learn Typescript",
      description: "",
      focusTime: 30,
      shortBreakTime: 5,
      longBreakTime: 20,
      timerMode: "focus",
      breakCount: 4,
      timeStamp: 320000,
      completed: true,
    };

    const finalState = reducer(initialState, {
      type: "SET_ACTIVE_TASK",
      payload: { activeTask: { ...task } },
    });

    expect(finalState).toEqual({
      theme: { ...lightTheme },
      modal: { visible: false, edit: false },
      tasks: [],
      activeTask: { ...task },
    });
  });
});
