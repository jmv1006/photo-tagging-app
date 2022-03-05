import './app.css'
import Header from '../header/header';
import Footer from '../footer/footer';
import { Outlet } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
