import React from "react";
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';

interface IPlayProps{
    handleClick:Function;
}
export default function MusicPlayerControls({handleClick}:IPlayProps) {
  
  return (
        <button className="play-button" onClick={() => handleClick()}>
         <PlayCircleFilledIcon />
        </button>
 
    
  );
}