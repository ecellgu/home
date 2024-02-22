import React from 'react'

function Divider(props) {
  return (
    <div className='w-[100%] bg-orange-500'>

      <h1 className='text-3xl p-2 font-extrabold font-Roboto'>{props.heading}</h1>
    </div>
  )
}

export default Divider
