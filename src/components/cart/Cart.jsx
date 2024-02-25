import { Link } from 'react-router-dom';
function Cart() {
  return (
    <>
      <h1>This is the cart</h1>
      <h3>
        <Link to="/">go to Home Page</Link>
      </h3>
    </>
  );
}

export default Cart;
