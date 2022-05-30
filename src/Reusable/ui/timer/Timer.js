import React, { useState, useEffect } from "react";

import { Redirect, useHistory } from "react-router-dom";
const Timer = () => {
  const [seconds, setSeconds] = useState(59);
  const [minutes, setMinutes] = useState(59);
  const [hours, setHours] = useState(1);
  let History = useHistory();

  useEffect(() => {
    if (seconds >= 0) {
      setTimeout(() => setSeconds(seconds - 1), 1000);
    } else {
      if (minutes > 0) {
        setMinutes(minutes - 1);
        setSeconds(59);
      }
      if (minutes == 0 && hours > 0) {
        setHours(hours - 1);
        setMinutes(59);
        setSeconds(60);
      }
      if (minutes == 0 && hours == 0) {
        setHours(0);
        setMinutes(0);
        setSeconds(0);
        setTimeout(() => History.push("/nimcet"), 1000);
        console.log("fdf");
      }
    }
  });
  return (
    <>
      <Header />
      <div style={{ paddingTop: 42 }}>
        <h1>Score Page</h1>

        <div>
          {hours}:{minutes}:{seconds < 10 ? `0${seconds}` : seconds}
        </div>
      </div>
    </>
  );
};
export default Timer;
