import './App.scss';
import { useRoutes } from './pages';
import { useSelector } from 'react-redux';
import { AuthContext } from './context/AuthContext';
import { useAuth } from './hooks/auth.hook';

function App() {
  const { user } = useSelector((state) => state.authReducer);
  console.log('true user', user)
  const { token, login, logout, userId } = useAuth();
  const routes = useRoutes(user && !!user.token);

  return (
    <div className="App">
      <AuthContext.Provider value={{ token, login, logout, userId }}>
     {routes}
     </AuthContext.Provider>
    </div>
  );
}

export default App;
