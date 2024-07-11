import { useContext } from "react";
import { ContextCart } from "../../Context";
import Layout from '../../Components/Layout'
import OrdersCard from "../../Components/OrdersCard";
import { Link } from "react-router-dom";

function MyOrders() {
  const context = useContext(ContextCart);
  return (
    <Layout>
      <div className='flex w-80 mb-6 justify-center items-center relative'>
        <h1>MyOrders</h1>
      </div>
      {
        context.myOrder.map((order) => (
          <Link key={order.id} to={`/MyOrders/${order.id}`}>
            <OrdersCard date={order.date} totalPrice={order.totalPrice} totalProduct={order.totalProducts} />
          </Link>
        ))
      }
    </Layout>
  )
}

export default MyOrders