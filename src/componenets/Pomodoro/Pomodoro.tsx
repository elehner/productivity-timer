import React from "react";
import { PomodoroProps } from "../../types/pomodoro";
import { Timer } from "../Timer/Timer";

export const Pomodoro: React.FC<PomodoroProps> = (props) => {
  return <>
    <Timer intialSeconds={25} handleTimeout={() => console.log(Date.now())} />
  </>;
};
