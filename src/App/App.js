

import MyComponent from '../Components/MyComponent.js';
import DesktopHomePage from '../Components/DesktopHomePage.js'


import ArtistPageDesktop from '../Components/ArtistPageDesktop.js';


import DesktopLeftMenu from '../Components/DesktopLeftMenu.js';

import '../scss/_init.scss';

const App = () => {
  return (
    <div className="App">


      <DesktopHomePage></DesktopHomePage>
      
      <header className="App-header">
        <p>
          Salut les copains
        </p>
      </header>


    </div>
  );
}
export default App;
