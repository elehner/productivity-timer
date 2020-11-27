import React, { useRef, useState, useEffect } from "react";
import Time from "../Time";

interface TimerProps {
  initialSeconds: number;
  initialTime: number;
  handleTimeout: () => void;
}

type timerState = "play" | "pause";

export const Timer: React.FC<TimerProps> = ({
  initialSeconds,
  initialTime,
  handleTimeout,
}) => {
  const [currentSeconds, setCurrentSeconds] = useState(initialSeconds);
  const [timerState, setTimerState] = useState<timerState>("play");
  let interval = useRef<NodeJS.Timeout>();

  const updateTime = React.useCallback(async () => {
    const calcTime = initialSeconds - Math.ceil((Date.now() - initialTime)/1000);
    setCurrentSeconds(
      calcTime <= initialSeconds && calcTime > 0
        ? calcTime
        : 0
    );
  }, [setCurrentSeconds, initialTime, initialSeconds]);

  useEffect(() => {
    if (timerState === "play") {
      interval.current = setInterval(() => {
        updateTime();
      }, 250);
    } else if (interval.current) {
      clearInterval(interval.current);
    }

    return () => interval.current && clearInterval(interval.current);
  }, [timerState, updateTime]);

  useEffect(() => {
    if (currentSeconds <= 0) {
      setTimerState("pause");
      handleTimeout();
    }
  }, [currentSeconds, handleTimeout]);

  return (
    <div>
      <Time seconds={currentSeconds} />
      {timerState === "play" ? (
        <button
          onClick={() => {
            setTimerState("pause");
          }}
        >
          Pause
        </button>
      ) : (
        <button
          onClick={() => {
            setTimerState("play");
          }}
        >
          Play
        </button>
      )}
    </div>
  );
};
