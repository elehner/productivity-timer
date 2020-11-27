import React, { useState } from "react";
import "./App.scss";
import Pomodoro from "../Pomodoro";
import Settings from "../Settings";
import { PomodoroSettings } from "../../types/pomodoro";

export const App: React.FC = () => {
  const [pomodoroSettings, setPomodoroSettings] = useState<PomodoroSettings>({
    pomodoroLength: 25*60,
    breakLength: 5*60,
    pomodorosBetweenBreaks: 1,
    totalPomodoros: 5,
  });

  console.log(Date.now());
  return (
    <div className="App">
      <Settings
        settings={pomodoroSettings}
        setSettings={setPomodoroSettings}
      />
      <Pomodoro {...pomodoroSettings}/>
    </div>
  );
};
