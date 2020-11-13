import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  // Link,
  Redirect,
  //useHistory,
  //useLocation
} from "react-router-dom";
import Media from 'react-media';

//desktop pages
import DesktopArtistPage from '@pages/desktop/DesktopArtistPage.js';
//import DesktopAlbumPage from '@pages/desktop/DesktopAlbumPage.js';
import DesktopAlbumPageStatic from '@pages/desktop/DesktopAlbumPageStatic.js';
import DesktopHomePage from '@pages/desktop/DesktopHomePage.js';
import DesktopLM from '@components/desktop/DesktopLM.js';
import DesktopPlayer from '@components/desktop/DesktopPlayer.js';

//mobile pages
import MobileArtistPage from '@pages/mobile/MobileArtistPage.js';
import MobileAlbumPage from '@pages/mobile/MobileAlbumPage.js';
import MobileHomePage from '@pages/mobile/MobileHomePage.js';
import MobilePlayerPage from '@pages/mobile/MobilePlayerPage.js';


//mobile components
import MobilePlaybar from '@components/mobile/MobilePlaybar.js'
import SpotifyAlbum from '@components/Spotify/spotifyAlbum.js';



const Router = () => {

  return (
    <div className="App">

    	<BrowserRouter>
        <Media queries={{ small: { maxWidth: 599 } }}>
          {matches =>
            matches.small ? (
              <Switch>
                <Route exact path="/">
                  <MobileHomePage/>
                </Route>
                <Route path="/artist">
                  <MobileArtistPage/>
                </Route>
                <Route path="/album">
                  <MobileAlbumPage/>
                </Route>
                <Route path="/player">
                  <MobilePlayerPage/>
                </Route>
                <Route path="/leftmenu">
                </Route>
                <Route path="/mobileplaybar">
                  <MobilePlaybar/>
                </Route>
                <Route path="/*">
                  <Redirect to="/" />
                </Route>
              </Switch>
            ) : (
              <div>
                <DesktopLM/>
                <DesktopPlayer/>
                <Switch>
                  <Route exact path="/" >
                    <DesktopHomePage/>
                  </Route>
                  <Route path="/artist">
                    <DesktopArtistPage/>
                  </Route>
                  <Route path="/album/:id">
                    <SpotifyAlbum/>
                  </Route>
                  <Route path="/album">
                    <DesktopAlbumPageStatic/>
                  </Route>
                  {/* <Route path="/leftmenu">
                    <DesktopLM/>
                  </Route> */}
                  <Route path="/*">
                    <Redirect to="/" />
                  </Route>
                </Switch>
              </div>
            )
          }
        </Media>
    	</BrowserRouter>

    </div>
  );
}

export default Router;