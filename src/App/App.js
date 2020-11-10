import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";

import ArtistPageDesktop from '@pages/ArtistPageDesktop.js';
import ArtistPageDesktop from '@components/ArtistPageDesktop.js';
import AlbumPageDesktop from '@pages/AlbumPageDesktop.js';

const App = () => {
  return (
    <div className="App">


    	<Router>
    		<Switch>
    			<Route exact path="/">
    				<DesktopHomePage/>
    			</Route>
    			<Route path="/artist">
    				<ArtistPageDesktop/>
    			</Route>
    			<Route path="/album">
    				<AlbumPageDesktop/>
    			</Route>
    			<Route path="/leftmenu">
    				<DesktopLeftMenu/>
    			</Route>
    			<Route path="/*">
    				<Redirect to="/" />
    			</Route>
    		</Switch>
    	</Router>

    </div>
  );
}

export default App;
