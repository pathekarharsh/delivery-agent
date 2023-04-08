import React from 'react'

export default function OrderCard() {



  return (
    <div key={order.orderNumber} className="order-card">
            <h2>Order #{order.orderNumber}</h2>
            <p>{order.details}</p>
            <div className="btn">
              <Link to="/orderassign" className="update-button">
                Know More
              </Link>
              <Link to="/orderassign" className="update-button">
                Assign
              </Link>
            </div>
          </div>
  )
}
