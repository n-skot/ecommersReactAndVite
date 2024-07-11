import { useContext } from 'react';
import { ContextCart } from '../../Context';
import Layout from '../../Components/Layout'
import Card from '../../Components/Card'
import ProductDetail from "../../Components/ProductDetail";

function index() {
  const context = useContext(ContextCart);  
  return (
    <Layout>
      <div className='flex w-80 justify-center items-center relative mb-6'>
        <h1>Home</h1>
      </div>
      <input type="search" name="" id="" placeholder='Search' className='p-2 mb-6 focus:outline-none border border-black rounded-lg' onChange={(event) => context.setSearchByTitle(event.target.value)} />
      <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
        {
          context.items?.map((items) => (<Card key={items.id} product={items.id} category={items.category.name} price={items.price} name={items.title} image={items.images} />))
        }
      </div>
      <ProductDetail />
    </Layout>
  )
}

export default index