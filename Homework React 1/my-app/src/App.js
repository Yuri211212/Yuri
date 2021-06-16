import './App.scss';
import { Header } from './components/Header';
import ProfileContainer from './container/ProfileContainer';

function App() {
  return (
    <div className="app">
   <Header/>
   <div className="app__wrapper"><ProfileContainer/></div> 
    
    </div>
  );
}

export default App;
