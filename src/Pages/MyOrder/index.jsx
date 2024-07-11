import { ChevronLeftIcon } from '@heroicons/react/24/solid';
import { ContextCart } from '../../Context';
import { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import Layout from '../../Components/Layout'
import OrderCard from '../../Components/OrderCard';

function MyOrder() {
  const context = useContext(ContextCart);
  let { id } = useParams();

  const orderCard = () => {
    console.log(id);
    console.log(context.myOrder.length <= 0);
    if (id === undefined) {
      if (context.myOrder.length <= 0) return <h2>No hay ordenes</h2>;

      const lastIndex = context.myOrder?.length - 1;
      return (
        context.myOrder?.[lastIndex]?.products.map(product => (
          <OrderCard
            key={product.product}
            productId={product.product}
            title={product.name}
            imageUrl={product.image}
            price={product.price}
            quantity={product.quantity} />
        ))
      );
    } else {
      const currentOrder = context.myOrder.find(order => order.id === id);

      if (!currentOrder) return <h2>Orden no encontrada</h2>;

      return (
        currentOrder.products?.map(product => (
          <OrderCard
            key={product.product}
            productId={product.product}
            title={product.name}
            imageUrl={product.image}
            price={product.price}
            quantity={product.quantity} />
        ))
      )
    }
  }

  return (
    <Layout>
      <div className='flex w-80 justify-center items-center relative mb-6'>
        <Link to={'/MyOrders'} className='absolute left-0'>
          <ChevronLeftIcon className="h-6 w-6 text-black cursor-pointer" />
        </Link>
        <h1>MyOrders</h1>
      </div>
      <div className="px-3 overflow-auto-scroll flex-1">
        {
          orderCard()
        }
      </div>
    </Layout>
  )
}

export default MyOrder