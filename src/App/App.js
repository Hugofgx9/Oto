import React from 'react';
import Router from '@src/router/router.js'
import SpotifyProvider from '@components/SpotifyProvider'
import PlayerContext from '@src/context/PlayerContext';

const spotifyClientId = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
const spotifyRedirectUri = process.env.REACT_APP_SPOTIFY_REDIRECT_URI;

const App = () => {
  return (
    <SpotifyProvider clientId={spotifyClientId} redirectUri={spotifyRedirectUri} >
      <PlayerContext>
        <Router/>      
      </PlayerContext>
    </SpotifyProvider>
  );
}

export default App;
