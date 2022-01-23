/* eslint-disable testing-library/prefer-screen-queries */
import React from 'react';
import { render} from '@testing-library/react';
import {MusicListItem} from './MusicListItem';

test.only('renders learn react link', () => {
  const props={
      key:'hdfhhdfh2',
      songItem:{
          songId:'234fsfdfdf',
          songTitle:'Awesome song',
          thumbnailImage:'someimage.jpg',
          musicFilePath:'dfff',
          noOfLikes:2,
          audioType:'audio/mp3'
      },
      onLikeClick:jest.fn()
  }
  const {container,getByText}=render(<MusicListItem {...props}/>);

  
});