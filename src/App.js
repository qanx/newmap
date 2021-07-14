import logo from './logo.svg';
import './App.css';
import mapimg from'../src/components/newmap.jpg'
import CatMeme from './components/canvas/cancas';
import FindLoc from './components/locate/locate';
import OutsideAlerter from './components/out';

function App() {
  return (
    <div className="App" style={{backgroundColor:'black'}}>
        <CatMeme/>
{/* 
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;

{/* <FindLoc/> */}