import React from 'react';
import axios from 'axios';
import {songItem} from '../../types';
import {MusicListItem} from '../MusicListItem/MusicListItem';

export const MusicList=()=>{
    const [songsArray,setSongs]= React.useState([]);
    const [getError,setError]=React.useState(false);
    const [songsList,setSongsList]=React.useState<Array<songItem>|null>(null);

    React.useEffect(() => {            
       getSongsList();
    }, []);
    
    React.useEffect(()=>{
        const requiredValues:Array<songItem>=songsArray.map((songItem:any)=>{
            return mapRequiredValues(songItem);
        })
        setSongsList(requiredValues);
    },[songsArray]);

    const getSongsList=async()=>{
        console.log("not coming...");
        try{
            const response=await axios.get('https://api-stg.jam-community.com/song/trending');
            setSongs(response.data);
        }catch(error:any)
        { 
            setError(true);
            console.log("getting songs failed!",error);
        }                       
    } ;  

    const mapRequiredValues=(songItem:any)=>{
        return {
            songId:songItem.id,
            songTitle:songItem.name,
            thumbnailImage:songItem.cover_image_path,
            musicFilePath:songItem.music_file_path,
            noOfLikes:songItem.likes,
            audioType:songItem.music_file_mimetype
        }
    };
    const onLikeClick=(songId:string)=>{
        const bodyParams = new URLSearchParams();
        bodyParams.append('id',songId);
        const likeSong=async()=>{
            try{
                const response=await axios.post('https://api-stg.jam-community.com/interact/like',
                bodyParams,
                {                    
                    headers: { 'content-type': 'application/x-www-form-urlencoded',
                },
                    params: {                                    
                        'apikey':'___agAFTxkmMIWsmN9zOpM_6l2SkZPPy21LGRlxhYD8'
                    }                     
                });
                console.log(response)
                getSongsList();

            }catch(error:any)
            { 
                setError(true);
                console.log("getting songs failed!",error);
            }                       
        }  ;  
        likeSong();
    };
    
    return <div className="music-container">
            {songsList&&songsList.map((song:songItem)=>{
            return <MusicListItem 
                    key={song.songId} 
                    songItem={song} 
                    onLikeClick={onLikeClick}                     
                />
            })
            }
        </div>;    
    
}

