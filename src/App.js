import React, { useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';
import CustomPlaylist from './components/CustomPlaylist';

export default function App() {
  const [ searchInput, setSearchInput ] = useState('');
  
  const updateSearchInput = (newInput) => {
    setSearchInput(newInput);
  }

  const [customPlaylist, setCustomPlaylist] = useState([]); // [{name: 'x', artists: ['a', 'b', 'c']}, ...]

  const updateCustomPlaylist = (newTrack) => {
    setCustomPlaylist(prev => [newTrack, ...prev]);
    //console.log(customPlaylist);
  }

  const saveCustomPlaylist = e => {
    e.preventDefault();
    setCustomPlaylist([]);
  };

  const removeTrackFromCustomPlaylist = (requiredTrackId) => {
    setCustomPlaylist((prev) => prev.filter((track) => track.id !== requiredTrackId));
  };


  return (
    <div className="App">
      <header className="App-header">
        <h1>Ja<span style={{ color: '#7d33ec' }}>mmm</span>ing</h1>
      </header>
      <main>
        <SearchBar className="Search-bar" updateSearchInput={updateSearchInput} />
        <div className='Results-and-custom-playlist-div'>
          <SearchResults className="Search-results" searchInput={searchInput} updateCustomPlaylist={updateCustomPlaylist} />
          <CustomPlaylist className="Custom-playlist" customPlaylist={customPlaylist} saveCustomPlaylist={saveCustomPlaylist} removeTrackFromCustomPlaylist={removeTrackFromCustomPlaylist} />
        </div>

      </main>
    </div>
  );
};
