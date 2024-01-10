import React, { useState, useEffect } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';
import CustomPlaylist from './components/CustomPlaylist';
import saveCustomPlaylist from './components/saveCustomPlaylist';

export default function App() {
  const [searchInput, setSearchInput] = useState('');
  const [customPlaylist, setCustomPlaylist] = useState([]);
  /*
  const [loggedIn, setLoggedIn] = useState(false);
  const CLIENT_ID = '721db2f866844a2fafa3b59982d10845';
  const REDIRECT_URI = 'http://localhost:3000/callback';
  */

  const updateSearchInput = (newInput) => {
    setSearchInput(newInput);
  };

  const updateCustomPlaylist = (newTrack) => {
    setCustomPlaylist((prev) => [newTrack, ...prev]);
  };

  const saveCustomPlaylistFunc = (e, inputValue) => {
    e.preventDefault();
    saveCustomPlaylist(customPlaylist, inputValue);
    setCustomPlaylist([]);
  };

  const removeTrackFromCustomPlaylist = (requiredTrackId) => {
    setCustomPlaylist((prev) => prev.filter((track) => track.id !== requiredTrackId));
  };

  /*
  const handleLogin = () => {
    window.location.href = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=code&redirect_uri=${REDIRECT_URI}&scope=user-read-private%20user-read-email&state=123`;
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');

    if (code) {
      fetch(`http://localhost:3000/exchange-token?code=${code}`)
        .then((response) => response.json())
        .then((data) => {
          if (data.access_token) {
            setLoggedIn(true);
          } else {
            console.error('Token exchange failed:', data.error);
          }
        })
        .catch((error) => {
          console.error('Error during token exchange:', error);
        });
    }
  }, []);
  */

  return (
    <div className="App">
      <header className="App-header">
        <h1>Ja<span style={{ color: '#7d33ec' }}>mmm</span>ing</h1>
      </header>




      <main>
        <SearchBar className="Search-bar" updateSearchInput={updateSearchInput} />
        <div className='Results-and-custom-playlist-div'>
          <SearchResults className="Search-results" searchInput={searchInput} updateCustomPlaylist={updateCustomPlaylist} />
          <CustomPlaylist className="Custom-playlist" customPlaylist={customPlaylist} saveCustomPlaylistFunc={saveCustomPlaylistFunc} removeTrackFromCustomPlaylist={removeTrackFromCustomPlaylist} />
        </div>
      </main>
    </div>
  );
}

/*
      <div className="login-button-div">
        <button id="login-button" onClick={handleLogin}>
          Log in with Spotify
        </button>
      </div>
*/