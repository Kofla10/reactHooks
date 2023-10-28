import React, {useState, useMemo } from 'react'
import { useStateHook } from './hooks/useStateHook'

const heavyStuff = (iterationNumber = 100)=>{
    for(let i =0; i<iterationNumber; i++){
        console.log('Ahí vamos...');
    }
    return `${iterationNumber} iteraciones realizadas`;
}

const MemoHook = () => {

    const {counter, handleIncrementar} = useStateHook(400);

    const [show, setShow] = useState(true);
    // useMemo(() => heavyStuff(counter), [counter])
    //el useMemo, memoriza valores
    // este ejemplo va memorizar el valor que retorna la funcion heavyStuff y solo lo reprocesa si el counter cambia
    const memorizeValue = useMemo(() => heavyStuff(counter), [counter])

  return (
    <>
        <h1>Counter: <small>{counter}</small> </h1>
        <hr />
        <h4>{heavyStuff(counter)}</h4>
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

export default MemoHook;
