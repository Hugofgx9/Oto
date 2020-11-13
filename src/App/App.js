import React from 'react';
import Router from '@src/router/router.js'
import SpotifyProvider from '@components/SpotifyProvider'

const spotifyClientId = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
const spotifyRedirectUri = process.env.REACT_APP_SPOTIFY_REDIRECT_URI;

const App = () => {
  return (
    <SpotifyProvider
      clientId={spotifyClientId}
      redirectUri={spotifyRedirectUri}
    >
      <Router/>
    </SpotifyProvider>
  );
}

export default App;
