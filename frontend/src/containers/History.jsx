import React, { useState, useEffect } from 'react'
import '../styles/history.css'
import { getOrders } from '../Handlers/dataStore'
import OrderItem from '../components/OrderItem'

const History = () => {

  const [orders, setOrders] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    async function retrieveOrders() {
      const items = await getOrders();
      if(items.length>0) {
        setOrders(items);
      } else { console.log('no orders'); }
    }

    retrieveOrders();
    return () => {
    };
  }, [])
  return (
    <div className='history'>
      {orders.length>0? 
      <div className="history-list-items"> {orders.map((order) => <OrderItem key={order.WarrantyAddress} order={order} setShowModal={setShowModal} /> )}</div> : <div className="">NO Orders yet</div> }
    </div>
  )
}

export default History
