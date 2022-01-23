import React from 'react';
import { songItem } from '../../types';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { MusicPlayer } from '../MusicPlayer/MusicPlayer';
import './MusicListItem.css'

interface IMusicListItemProps{
    key:string
    songItem:songItem;
    onLikeClick:Function;    
}

export const MusicListItem=({songItem,onLikeClick}:IMusicListItemProps)=>{

    const {songId,thumbnailImage,songTitle,musicFilePath,audioType} = songItem;
    
    return (<div className="music-item">
              <div className="cover-image-div">
                  <img className="cover-image" src={thumbnailImage} alt={`cover-${songTitle}`}/>
              </div>
              <div className="song-title">
                 {songTitle}
              </div>
              <div className="player-like-div">
                 <MusicPlayer musicFilePath={musicFilePath} audioType={audioType}/>
                 <button className="like-button" onClick={()=>onLikeClick(songId)}>
                     <FavoriteIcon/>
                 </button>
              </div>
            </div>
            );    
    
}