import React from 'react'


function Products({products}) {
  return (
    <div className="products-view">
        {products.length === 0 ?  <p>No products for u bich</p> : products.map(product => {
          return <h2 key={product.id}> {product.title}</h2>
        })}
      
    </div>
  )
}

export default Products