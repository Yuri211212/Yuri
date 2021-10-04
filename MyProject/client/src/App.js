import './App.scss'; 
import { useRoutes } from './pages';
import { useSelector } from 'react-redux';
import { AuthContext } from './context/AuthContext';
import { useAuth } from './hooks/auth.hook';
import { useEffect } from 'react';

function App() {
  const { user } = useSelector((state) => state.authReducer);
  const { token, login, logout, userId } = useAuth();
  
  useEffect(() => {
   user && login(user.token, user.userId);
  }, [user]);

  const routes = useRoutes(!!token);
  return (
    <div className="App">
    <AuthContext.Provider value={{ token, login, logout, userId }}>
   {routes}
   </AuthContext.Provider>
  </div>
  );
}

export default App;