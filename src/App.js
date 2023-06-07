import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="logo" />
        <p class="cursive text-6xl tracking-wider font-bold text-fuchsia-500">
          x@emailgpt.app
        </p>
        <p class="cursive text-teal-500">You know what to do.</p>
        <p class="text-xs font-sans text-teal-700">Feedback: team@emailgpt.app</p>
      </header>
    </div>
  );
}

export default App;
