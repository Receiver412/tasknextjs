"use client"
import React, { useState } from 'react'
import { Button } from 'react-bootstrap'

const Buttonc = () => {
    const [first, setfirst] = useState(0)
    const handleClick=()=>setfirst(prev=>prev+1)
  return (
    <Button className='my-2 ' variant='danger' onClick={ () =>handleClick()}>Button { first }</Button>
  )
}

export default Buttonc