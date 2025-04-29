'use client';
import React from 'react'

const AddToCart = () => {
  return (
    <div>
        <button className='btn btn-primary rounded-box' onClick={() => console.log("Added to cart")}>Add to cart</button>
    </div>
  )
}

export default AddToCart