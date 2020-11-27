import React from "react";
import { PomodoroSettings } from "../../types/pomodoro";

interface SettingsProps {
  settings: PomodoroSettings;
  setSettings: (settings: PomodoroSettings) => void;
}

export const Settings: React.FC<SettingsProps> = ({settings, setSettings}) => {
  return <div>
    <div>Pomodoro Length: {settings.pomodoroLength}</div>
    <div>Total Pomodoros: {settings.totalPomodoros}</div>
    <div>Break Length: {settings.breakLength}</div>
    <div>Number of Pomodoros between breaks: {settings.pomodorosBetweenBreaks}</div>
  </div>;
};
