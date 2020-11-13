import React from 'react'
import SpotifyProvider from '@components/SpotifyProvider'

// import Player from './Player'

const spotifyClientId = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
const spotifyRedirectUri = process.env.REACT_APP_SPOTIFY_REDIRECT_URI;

const Spotify = () => {
  return (
    <SpotifyProvider
      clientId={spotifyClientId}
      redirectUri={spotifyRedirectUri}
    >
    </SpotifyProvider>
  )
}

export default Spotify;