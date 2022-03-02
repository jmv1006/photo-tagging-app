import './app.css'
import Header from '../header/header';
import { Outlet } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <Header />
      <Outlet />
      {/*footer here */}
    </div>
  );
}

export default App;
