import { useEffect, useState } from 'react';
import { Card } from '../card/Card';

function Shop() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
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
                key={item.id}
                price={item.price}
                title={item.title.split(' ').slice(0, 3).join(' ')}
                image={item.image}
                description={item.description}
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
