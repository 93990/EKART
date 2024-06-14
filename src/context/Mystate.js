import React, { useState } from 'react'
import {faker} from '@faker-js/faker'

const Mystate = () => {
const [products,setproducts]= useState([...Array[20]],map(()=>{
  id:faker.datatype.uuid()
}))
  return (
    <div>Mystate</div>
  )
}

export default Mystate