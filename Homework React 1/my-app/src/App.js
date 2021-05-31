import './App.css';
import { Mainblock } from './components/mainblock';
import { Header } from './components/header';

function App() {
  return (
    <div className="App">
    <Header name='Header'/>
    <Mainblock/>
    </div>
  );
}

export default App;
