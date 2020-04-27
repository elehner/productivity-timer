import React, { useRef, useState, useEffect } from "react";
import Time from "../Time";

interface TimerProps {
  intialSeconds: number;
  handleTimeout: () => void;
}

type timerState = "play" | "pause";

export const Timer: React.FC<TimerProps> = ({
  intialSeconds,
  handleTimeout,
}) => {
  const [currentSeconds, setCurrentSeconds] = useState(intialSeconds);
  const [timerState, setTimerState] = useState<timerState>("play");
  let interval = useRef<NodeJS.Timeout>();

  useEffect(() => {
    if (timerState === "play") {
      interval.current = setInterval(() => {
        setCurrentSeconds((oldCurrentSeconds) => {
          if (oldCurrentSeconds > 0) {
            oldCurrentSeconds--;
          }
          return oldCurrentSeconds;
        });
      }, 1000);
    } else if (interval.current) {
      clearInterval(interval.current);
    }

    return () => interval.current && clearInterval(interval.current);
  }, [timerState]);

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
