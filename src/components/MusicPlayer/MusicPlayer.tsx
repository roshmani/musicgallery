import React from 'react';
import Play from "../Play/Play";
import Pause from "../Pause/Pause";
import './MusicPlayer.css';

interface IMusicPlayer{
    musicFilePath:string;
    audioType:string;
}
export const MusicPlayer=({musicFilePath,audioType}:IMusicPlayer)=>{
   
    const [isPlaying, setIsPlaying] = React.useState(false);
    const audioRef = React.useRef(new Audio(musicFilePath));

  React.useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();      
    } else {
      audioRef.current.pause();
    }
    }, [isPlaying]);   
    
    
    React.useEffect(() => {
    // Pause and clean up on unmount
    return () => {
      audioRef.current.pause();      
    };
    }, []);

  return (
    <div className="player">
      <div className="controls">
        {isPlaying ? 
          <Pause handleClick={() => setIsPlaying(false)} /> :
          <Play handleClick={() => setIsPlaying(true)} />
        }        
      </div>
    </div>
  );
}

export default MusicPlayer;

