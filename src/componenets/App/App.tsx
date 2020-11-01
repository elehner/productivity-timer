import React, { useState } from "react";
import "./App.css";
import Timer from "../Timer";
import Pomodoro from "../Pomodoro";
import Settings from "../Settings";

export const App: React.FC = () => {
  const [pomodoroSettings, setPomodoroSettings] = useState({
    pomodoroLength: 25*60,
    breakLength: 5*60,
    pomodorosBetweenBreaks: 1,
    totalPomodoros: 5,
  });

  console.log(Date.now());
  return (
    <div className="App">
      <Pomodoro {...pomodoroSettings}/>
      <Settings {...pomodoroSettings}/>
    </div>
  );
};
