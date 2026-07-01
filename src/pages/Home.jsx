import React, { useEffect, useState } from 'react'
import { Link } from 'react-router';
import Cart from '../components/Cart';

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(()=>{
    const fatchData = async() =>{
      const rs = await fetch('https://fakestoreapi.com/products?limit=8')
      const data = await rs.json();
      setProducts(data);
    }
    fatchData();
  },[])

  return (
    <div>
      {/* Hero Session */}
      <div className='bg-orange-100 text-center h-svh pt-45 space-y-3'>
          <h3>New Collection</h3>
          <h1 className='font-bold text-4xl'>Luxury Without Labels</h1>
          <p>Explore new-in product and best sellers</p>
          <button className='bg-orange-600 rounded-md px-4 py-2 hover:bg-amber-500 text-white'>View Collection</button>
        </div>
        {/* Product information */}
      <div className='text-center pt-10 mb-50'>
        <h1 className='text-2xl font-bold'>Best Sellers</h1>
        <p>Explore our best seller products</p>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-20 md:px-40 py-20 gap-10'>
          {
            products.map(items=>(
            <Link to={`/detail/${items.id}`}>
              <Cart data={items}></Cart>
            </Link>
            ))
          }
        </div>
        <div>
          <Link to='/product' className='bg-orange-500 text-white px-4 p-2 rounded-md hover:shadow-lg transition-all hover:-translate-y-3 hover:bg-amber-500'>Explore more</Link>
        </div>
      </div>
    </div>
  )
}

export default Home