import './App.css';
import { Link } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
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
      <Footer />
    </>
  );
}

export default App;
