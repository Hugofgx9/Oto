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
import DesktopArtistPageStatic from '@pages/desktop/DesktopArtistPageStatic.js';
import DesktopAlbumPage from '@pages/desktop/DesktopAlbumPage.js';
import DesktopAlbumPageStatic from '@pages/desktop/DesktopAlbumPageStatic.js';
import DesktopPlaylistPage from '@pages/desktop/DesktopPlaylistPage.js';
import DesktopHomePage from '@pages/desktop/DesktopHomePage.js';
import DesktopLM from '@components/desktop/DesktopLM.js';
import DesktopPlayer from '@components/desktop/DesktopPlayer.js';
import SearchDesktop from '@components/desktop/SearchDesktop';

//mobile pages
import MobileArtistPage from '@pages/mobile/MobileArtistPage.js';
import MobileAlbumPage from '@pages/mobile/MobileAlbumPage.js';
import MobileHomePage from '@pages/mobile/MobileHomePage.js';
import MobilePlayerPage from '@pages/mobile/MobilePlayerPage.js';


//mobile components
import MobilePlaybar from '@components/mobile/MobilePlaybar.js'



const Router = () => {

  return (
    <div className="App">

    	<BrowserRouter>
        <Media queries={{ small: { maxWidth: 599 } }}>
          {matches =>
            matches.small ? (
              <div>
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
                <MobilePlaybar/>
              </div>
            ) : (
              <div>
                <DesktopLM/>
                <DesktopPlayer/>
                <SearchDesktop/>
                <Switch>
                  <Route exact path="/" >
                    <DesktopHomePage/>
                  </Route>
                  <Route path="/artist/:id">
                    <DesktopArtistPage/>
                  </Route>
                  <Route path="/artist">
                    <DesktopArtistPageStatic/>
                  </Route>
                  <Route path="/album/:id">
                    <DesktopAlbumPage/>
                  </Route>
                  <Route path="/album">
                    <DesktopAlbumPageStatic/>
                  </Route>
                  <Route path="/playlist/:id">
                    <DesktopPlaylistPage/>
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