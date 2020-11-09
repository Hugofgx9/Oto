import MyComponent from '../Components/MyComponent.js';
//import '../scss/_init.scss';
//import '../scss/_variables.scss';

const App = () => {
  return (
    <div className="App">
      <MyComponent> Je passe une props </MyComponent>
      <header className="App-header">
        <p>
          Salut les copains
        </p>
      </header>
    </div>
  );
}

export default App;
