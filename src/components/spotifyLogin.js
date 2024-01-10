// SpotifyLogin.js

import React, { useEffect } from 'react';
import { useStateProvider } from './stateProvider';
import axios from 'axios';
import { reducerCases } from './reducerCases';

const SpotifyLogin = () => {
  //const redirectUri = 'https://jammming12.netlify.app';
  const redirectUri = 'http://localhost:3000/';

  const [{ token, userInfo }, dispatch] = useStateProvider();

  const handleClick = () => {
    const clientId = 'your_client_id'; // Replace with your Spotify Client ID
    const responseType = 'token&show_dialog=true';

    const endpoint = 'https://accounts.spotify.com/authorize';
    const scope = [
      'user-read-email',
      'streaming',
      'user-read-private',
      'user-read-playback-state',
      'playlist-modify-public',
      'playlist-modify-private',
      'user-modify-playback-state',
      'user-read-currently-playing',
      'user-read-recently-played',
      'user-read-playback-position',
      'user-top-read',
    ];

    window.location.href = `${endpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope.join(
      ' '
    )}&response_type=${responseType}`;
  };

  const logout = () => {
    window.location.href = redirectUri;
  };

  useEffect(() => {
    const getUserInfo = async () => {
      try {
        const { data } = await axios.get('https://api.spotify.com/v1/me', {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });
        const userInfo = {
          userId: data.id,
          userName: data.display,
          displayName: data.display_name,
        };

        dispatch({ type: reducerCases.SET_USER, userInfo });
      } catch (error) {
        // Handle errors here
        console.error('Error fetching user info:', error);
      }
    };

    if (token) {
      getUserInfo();
    }
  }, [dispatch, token]);

  return (
    <div className="spotifyLogin">
      {!token ? (
        <button onClick={handleClick}>Login with Spotify</button>
      ) : (
        <>
          <span>{userInfo?.displayName}</span>
          <button onClick={logout}>Logout</button>
        </>
      )}
    </div>
  );
};

export default SpotifyLogin;
