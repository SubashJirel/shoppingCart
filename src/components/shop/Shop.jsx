import { useEffect, useState } from 'react';
import { Card } from '../card/Card';

function Shop() {
  const [data, setData] = useState([]);
  const [cart, setCart] = useState([]);

  function addToCart(itemId) {
    // console.log(itemId);
    const selected = data.find((val) => val.id === itemId);
    // console.log(selected);
    setCart((prev) => [...prev, selected]);
    console.log(cart);
  }
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setData(data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
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
    </>
  );
}
export default Shop;
