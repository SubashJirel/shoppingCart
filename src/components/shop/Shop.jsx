import { useContext, useEffect, useState } from 'react';
import { Card } from '../card/Card';
import { useCartContext } from '../../Layout';

function Shop() {
  const [data, setData] = useState([]);
  const [cartIcon, setCartIcon] = useState({});
  const [cart, setCart] = useState([]);
  const { handleSetCartForHeader } = useCartContext();

  function addToCart(itemId) {
    // console.log(itemId);
    const selected = data.find((val) => val.id === itemId);

    // console.log(selected);
    setCart((prev) => [...prev, selected]);
    handleSetCartForHeader(selected);
    // handleSetCartForHeader(cartIcon);
    // console.log(cart);
  }
  // function addToCart2(itemId) {
  //   setCartIcon((prev) => ({ ...prev, [itemId]: (prev[itemId] || 0) + 1 }));
  //   console.log(cartIcon);
  //   const totalItems = Object.values(cartIcon).reduce(
  //     (acc, currentValue) => acc + currentValue,
  //     0
  //   );
  //   console.log(totalItems);
  // }
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setData(data);
      })
      .catch((error) => console.error(error));
  }, []);

  //   useEffect(()=>{
  //     function getDefaultCart() {
  //         let inTheRightCart = {}
  //         for(let i=1; i<data.length; i++) {
  //             inTheRightCart[i]=0
  //         }
  //       }
  //   },[data])

  return (
    <div className="h-full min-h-screen ">
      <ul className="grid autoFitThisGrid mt-4">
        {data.map((item) => (
          <li key={item.id} className="border ">
            <Card
              itemId={item.id}
              price={item.price}
              title={item.title.split(' ').slice(0, 3).join(' ')}
              image={item.image}
              description={item.description}
              addToCart={addToCart}
            />
          </li>
          //   <li key={index}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}
export default Shop;
