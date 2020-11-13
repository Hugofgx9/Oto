import React from 'react'
import SpotifyProvider from '@components/SpotifyProvider'
import DesktopAlbumPage from '@pages/desktop/DesktopAlbumPage.js';
//import Tracks from './Tracks'

// import Player from './Player'

const spotifyClientId = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
const spotifyRedirectUri = process.env.REACT_APP_SPOTIFY_REDIRECT_URI;

const Spotify = () => {
  return (
    <SpotifyProvider
      clientId={spotifyClientId}
      redirectUri={spotifyRedirectUri}
    >
      <DesktopAlbumPage/>
    </SpotifyProvider>
  )
}

export default Spotify;