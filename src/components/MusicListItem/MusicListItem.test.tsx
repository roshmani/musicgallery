/* eslint-disable testing-library/prefer-screen-queries */
import React from 'react';
import { getAllByRole, getByAltText, getByDisplayValue, render} from '@testing-library/react';
import {MusicListItem} from './MusicListItem';
import userEvent from '@testing-library/user-event';

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


test('renders Music item', () => {  
  const {getByText,getAllByRole,getByAltText}=render(<MusicListItem {...props}/>);
  expect(getByText('Awesome song')).toBeInTheDocument();
  expect(getByAltText('cover-Awesome song')).toBeInTheDocument();
  expect(getAllByRole('button')).toHaveLength(2);
 
});
test('should call onLikeClick on like click', () => { 
    const {getByLabelText}=render(<MusicListItem {...props}/>); 
    userEvent.click(getByLabelText('like-button'));
    expect(props.onLikeClick).toHaveBeenCalled();
    });
