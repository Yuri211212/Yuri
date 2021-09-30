import './App.scss'; 
import { useRoutes } from './pages';

function App() {
  const routes = useRoutes(false)
  return (
   <div className="App">
     {routes}
   </div>
  );
}

export default App;
