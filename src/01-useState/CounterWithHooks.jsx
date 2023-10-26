import React from 'react'
import { useStateHook } from '../hooks/useStateHook'

export const CounterWithHooks = () => {

  const {counter, handleIncrementar, handleReset, handleRestar} = useStateHook(15);


  return (
    <>
      <h1>Counter With Hook: {counter}</h1>
      <hr />
      <div>
        <button className='btn btn-primary' onClick={() => handleIncrementar(1123400000)}> +1 </button>
        <button className='btn btn-primary' onClick={ handleReset}> Reset </button>
        <button className='btn btn-primary' onClick={() => handleRestar(2342343)}> -1 </button>
      </div>
    </>
  )
}
