import './App.scss';
import { Header } from './components/Header';
import Modal from './components/Modal';
import SearchCategory from './components/SearchCategory';
import CategoryContainer from './container/CategoryContainer';
import ProfileContainer from './container/ProfileContainer';
import { ProgressBarContainer } from './container/ProgressBarContainer';
import { Test } from './contextContext/index';

function App() {
  return (
    <div className="app">
      <Test.Provider value={{ value: "Hello from Context" }}>
        <Header />
      </Test.Provider>
      <ProgressBarContainer />
      <SearchCategory/>
      <div className="app__wrapper">
      <ProfileContainer /><CategoryContainer />
      </div>
      <Modal/>
      
    </div>
  );
}

export default App;
