import './App.css';
import MyComponent from '../Components/MyComponent.js';

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
