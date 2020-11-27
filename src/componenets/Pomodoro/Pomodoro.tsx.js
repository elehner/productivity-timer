import React, { useCallback, useState } from "react";
import { PomodoroSettings } from "../../types/pomodoro";
import { Timer } from "../Timer/Timer";
import './Pomodoro.css';

export const Pomodoro: React.FC<PomodoroSettings> = (props) => {
  const [timerLength, setTimerLength] = useState<number>(props.pomodoroLength);
  const [pomodorosTillBreak, setPomodorosTillBreak] = useState<number>(props.pomodorosBetweenBreaks);

  const handleTimeout = useCallback(() => {
    const newPomosTillBreak = pomodorosTillBreak - 1;
    if (pomodorosTillBreak <= 0) {
      setTimerLength(props.breakLength);
      setPomodorosTillBreak(props.pomodorosBetweenBreaks+1);
    }
    else {
      setTimerLength(props.pomodoroLength);
      setPomodorosTillBreak(newPomosTillBreak);
    }
  }, [
    pomodorosTillBreak,
    props.breakLength,
    props.pomodoroLength,
    props.pomodorosBetweenBreaks
  ]);

  return <div className='Pomodoro'>
    <Timer
      intialSeconds={timerLength}
      handleTimeout={handleTimeout}
    />
  </div>;
};
