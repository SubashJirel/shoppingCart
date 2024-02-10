import './App.css';
import { Link } from 'react-router-dom';
import Home from './pages/Home';
function App() {
  return (
    <>
      <h1>Hello from app</h1>
      <Home />
      <nav>
        <ul>
          <li>
            <Link to="cart">Go to cart</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default App;
