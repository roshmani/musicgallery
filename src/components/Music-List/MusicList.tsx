import React from 'react';
import axios from 'axios';
import {songItem} from '../types';
import {MusicListItem} from '../MusicListItem/MusicListItem';

export const MusicList=()=>{
    const [songsArray,setSongs]= React.useState([]);
    const [getError,setError]=React.useState(false);
    const [songsList,setSongsList]=React.useState<Array<songItem>|null>(null);

    React.useEffect(() => {       
        const getSongsList=async()=>{
            try{
                const response=await axios.get('https://api-stg.jam-community.com/song/trending');
                setSongs(response.data);
            }catch(error:any)
            { 
                setError(true);
                console.log("getting songs failed!",error);
            }                       
        }  ;  
       getSongsList();
      }, []);
    
    React.useEffect(()=>{
        const requiredValues:Array<songItem>=songsArray.map((songItem:any)=>{
            return mapRequiredValues(songItem);
        })
        setSongsList(requiredValues);
    },[songsArray]);

    const mapRequiredValues=(songItem:any)=>{
        return {
            songId:songItem.id,
            songTitle:songItem.name,
            thumbnailImage:songItem.cover_image_path,
            musicFilePath:songItem.music_file_path,
            noOfLikes:songItem.likes
        }
    };

    return <div>
        {songsList&&songsList.map((song:songItem)=>{
           return <MusicListItem songItem={song}/>
        })
        }
        </div>;    
    
}

