import React from "react";
import PauseCircleFilledIcon from '@mui/icons-material/PauseCircleFilled';

interface IPauseProps{
    handleClick:Function;
}
export default function Pause({handleClick}:IPauseProps) {
  
  return (
        <button aria-label="pause" className="pause-button" onClick={() => handleClick()}>
         <PauseCircleFilledIcon />
        </button>
 
    
  );
}