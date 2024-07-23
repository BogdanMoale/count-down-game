import { useState, useRef, Fragment } from "react";
import ResultModal from "./ResultModal";

// let timer;

export default function TimerChallenge({ title, targetTime }) {
  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);
  const timer = useRef();
  const dialog = useRef();

  const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

  //timer has expire
  if (timeRemaining <= 0) {
    clearInterval(timer.current);
    dialog.current.open();
  }

  function handleReset() {
    setTimeRemaining(targetTime * 1000);
  }

  function handleStart() {
    timer.current = setInterval(() => {
      setTimeRemaining((preTimeRemaining) => preTimeRemaining - 10);
    }, 10);
  }

  //manualy stop the timer by pressing stop button
  function handleStop() {
    dialog.current.open();
    clearInterval(timer.current);
  }
  return (
    <Fragment>
      <ResultModal
        ref={dialog}
        targetTime={targetTime}
        remainingTime={timeRemaining}
        onReset={handleReset}
      ></ResultModal>

      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timerIsActive ? handleStop : handleStart}>
            {timerIsActive ? "Stop" : "Start"}
          </button>
        </p>
        <p className={timerIsActive ? "active" : undefined}>
          {timerIsActive ? "Time is running..." : "Timer inactive"}
        </p>
      </section>
    </Fragment>
  );
}
