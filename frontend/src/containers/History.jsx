import React, { useState, useEffect } from 'react'
import '../styles/history.css'
import { getOrders } from '../Handlers/dataStore'
import OrderItem from '../components/OrderItem'
import TransferModal from '../components/TransferModal';
import Loading from '../components/Loading';

const History = () => {

  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function retrieveOrders() {
      setLoading(true);
      const items = await getOrders();
      if(items.length>0) {
        setOrders(items);
      } else { console.log('no orders'); }
      setLoading(false);
    }

    retrieveOrders();
    return () => {
    };
  }, [])
  return loading? <Loading /> : <div className='history'>
      {orders.length>0? 
      <div className="history-list-items"> {orders.map((order) => <OrderItem key={order.WarrantyAddress} order={order} /> )}</div> : <div className="">NO Orders yet</div> }
    </div>
  
}

export default History
