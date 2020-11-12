import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";
import Media from 'react-media';

//desktop pages
import DesktopArtistPage from '@pages/desktop/DesktopArtistPage.js';
import DesktopAlbumPage from '@pages/desktop/DesktopAlbumPage.js';
import DesktopHomePage from '@pages/desktop/DesktopHomePage.js';
import DesktopLM from '@components/DesktopLM.js';

//mobile pages
import MobileArtistPage from '@pages/mobile/MobileArtistPage.js';
import MobileAlbumPage from '@pages/mobile/MobileAlbumPage.js';
import MobileHomePage from '@pages/mobile/MobileHomePage.js';

const App = () => {
  return (
    <div className="App">

    	<Router>
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
                <Route path="/leftmenu">
                </Route>
                <Route path="/*">
                  <Redirect to="/" />
                </Route>
              </Switch>
            ) : (
              <div>
                <DesktopLM/>
                <Switch>
                  <Route exact path="/">
                    <DesktopHomePage/>
                  </Route>
                  <Route path="/artist">
                    <DesktopArtistPage/>
                  </Route>
                  <Route path="/album">
                    <DesktopAlbumPage/>
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

    	</Router>

    </div>
  );
}

export default App;
