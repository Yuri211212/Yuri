import './App.scss';
import { Header } from './components/Header';
import CategoryContainer from './container/CategoryContainer';
import ProfileContainer from './container/ProfileContainer';

function App() {
  return (
    <div className="app">
      <Header/>
      <div className="app__wrapper"><ProfileContainer/><CategoryContainer/></div>
    </div>
  );
}

export default App;