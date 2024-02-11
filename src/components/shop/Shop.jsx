import { useEffect, useState } from 'react';

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
      <h1>This is the shop section</h1>
      <p>Jewellery items:</p>
      <ul>
        {data.map((item, index) => (
          <li key={index}>{item.title}</li>
        ))}
      </ul>
    </>
  );
}
export default Shop;
