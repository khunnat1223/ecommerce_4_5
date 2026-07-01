import React, { useEffect, useState } from 'react'
import Cart from '../components/Cart';
import { Link } from 'react-router';

function Product() {
  const [products, setProducts] = useState([]);
  
  useEffect(()=>{
    const fetchData = async ()=>{
      const rs = await fetch("https://fakestoreapi.com/products")
      const data = await rs.json();
      setProducts(data);
      console.log(data);
    }
    fetchData();
  },[])

  return (
    <>
      <h1 className='text-center font-medium text-2xl mt-5'>ALL PRODUCTS</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-20 md:px-40 py-20 gap-10'>
        {
          products.map(items=>(
            <Link to={`/detail/${items.id}`}>
              <Cart data={items}></Cart>
            </Link>
          ))
        }
      </div>
    </>
  )
}

export default Product