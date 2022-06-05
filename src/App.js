import './App.css';
import Hello from'./components/Hello'
import HelloDio from './components/HelloDio'

function App() {
  return (
    <div className="App">
      <Hello />
      <HelloDio dev_name="Kenlove" dev_surname="Chereste"/>
    </div>
  );
}

export default App;