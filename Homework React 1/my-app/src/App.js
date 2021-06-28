import './App.scss';
import { Header } from './components/Header';
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
      <div className="app__wrapper">
        <ProfileContainer /><CategoryContainer />
      </div>
    </div>
  );
}

export default App;
