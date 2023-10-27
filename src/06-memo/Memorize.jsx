import React, {useState} from 'react'
import { useStateHook } from './hooks/useStateHook'
import Small from './Small'

const Memorize = () => {

    const {counter, handleIncrementar} = useStateHook(1);

    const [show, setShow] = useState(true);

  return (
    <>
        <h1>Counter: <Small value={counter}></Small></h1>
        <hr />
        <button 
            className='btn btn-primaty'
            onClick={() => handleIncrementar(1)}
        >
            +1
        </button>
        <button className='btn btn-primary' onClick={() =>setShow(!show)} > 
            Show/Hide {JSON.stringify(show)}
        </button>
    </>
  )
}

export default Memorize
