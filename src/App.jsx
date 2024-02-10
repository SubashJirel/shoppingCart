import './App.css';
import { Link } from 'react-router-dom';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
function App() {
  return (
    <>
      <Header />
      <h1 className="bg-green-400 p-4">Hello from app</h1>
      <Home />
      <nav>
        <ul>
          <li>
            <Link to="cart">Go to cart</Link>
          </li>
        </ul>
      </nav>
      <Home />
      <Footer />
    </>
  );
}

export default App;
