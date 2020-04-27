import React, { useState, useEffect } from "react";

interface TimeProps {
  seconds: number;
}

// Time should always display as two digits
function timePad(digits: number): string {
  return ("00" + digits).slice(-2);
}

export const Time: React.FunctionComponent<TimeProps> = (props: TimeProps) => {
  const [displaySeconds, setDisplaySeconds] = useState("00");
  const [displayMinutes, setDisplayMinutes] = useState("00");

  useEffect(() => {
    setDisplaySeconds(timePad(props.seconds % 60));
    setDisplayMinutes(timePad(Math.floor(props.seconds / 60)));
  }, [props.seconds]);
  return (
    <div>
      {displayMinutes}:{displaySeconds}
    </div>
  );
};
