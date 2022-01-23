import React from "react";
import moment from "moment";

interface IProgressBarProps{ 
    duration:number; 
    curTime:number;
    onTimeUpdate:Function;
 }

export default function ProgressBar({ duration, curTime, onTimeUpdate }:IProgressBarProps) {
  
  const curPercentage = (curTime / duration) * 100;

  function formatDuration(duration:number) {
    return moment.duration(duration, "seconds");
  }

  function calcClickedTime(e:any) {
    const clickPositionInPage = e.pageX;
    const progressBar = document.querySelector<HTMLElement>(".progressBar-progress") as HTMLElement;
    const progressBarStart = progressBar.getBoundingClientRect().left + window.scrollX;
    const progressBarWidth = progressBar.offsetWidth;
    const clickPositionInProgressBar = clickPositionInPage - progressBarStart;
    const timePerPixel = duration / progressBarWidth;
    return timePerPixel * clickPositionInProgressBar;
  }
  
  function handleTimeDrag(e:any) {
    onTimeUpdate(calcClickedTime(e));

    const updateTimeOnMove = (eMove:any)=> {
      onTimeUpdate(calcClickedTime(eMove));
    };

    document.addEventListener("mousemove", updateTimeOnMove);

    document.addEventListener("mouseup", () => {
      document.removeEventListener("mousemove", updateTimeOnMove);
    });
  }

  return (
    <div className="progressBar">
      <span className="progressBar-time">{formatDuration(curTime)}</span>
      <div
        className="progressBar-progress"
        style={{
          background: `linear-gradient(to right, orange ${curPercentage}%, white 0)`
        }}
        onMouseDown={e => handleTimeDrag(e)}
      >
        <span
          className="progress-knob"
          style={{ left: `${curPercentage - 2}%` }}
        />
      </div>
      <span className="progressBar-time">{formatDuration(duration)}</span>
    </div>
  );
}
