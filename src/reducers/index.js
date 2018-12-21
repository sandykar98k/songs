import { combineReducers } from 'redux';

const songsReducer = () => {
  return [
    { title: 'Start Bucks', duration: '4:05' },
    { title: 'Not Afraid', duration: '4:30' },
    { title: 'All Start', duration: '5:00' },
    { title: 'I Want It That Way', duration: '3:20' }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
