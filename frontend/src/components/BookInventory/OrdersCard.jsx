import OrderSingleCard from './OrderSingleCard';

const OrdersCard = ({ orders }) => {
    return (
        <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {orders.map((item) => (
              <OrderSingleCard key={item._id} order={item}/>  
            ))}
        </div>
    );
};

export default OrdersCard