import React from 'react';
import { songItem } from '../types';
import './MusicListItem.css'

interface IMusicListItemProps{
    key:string
    songItem:songItem;
    onLikeClick:Function;
}

export const MusicListItem=({songItem,onLikeClick}:IMusicListItemProps)=>{

    const {songId,thumbnailImage,noOfLikes,songTitle} = songItem;
    
    return (<div>
              <div className="cover-image-div">
                  <img className="cover-image" src={thumbnailImage} alt={`cover-${songTitle}`}/>
              </div>
              <div className="song-title">
                 {songTitle}
              </div>
              <div>
                 <button onClick={()=>onLikeClick(songId)}>Like</button>
              </div>
            </div>
            );    
    
}