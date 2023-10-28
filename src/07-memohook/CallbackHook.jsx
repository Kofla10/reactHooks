import React, {useState, useCallback} from 'react'
import { ShowIncrement } from './ShowIncrement';

export const CallbackHook = () => {

    const [counter, setCounter] = useState(15);

    // const increment = () => {
    //     setCounter(counter+1)
    // }
    // lo que hace el CallbackHook es memorizar  funciones o valores que esten en diferente espacios de memoria
    //Para que la funcion no se vuleva a redibujar, nos toca usar el memo
    //jajaj si que pase trabajo jajajaja por no usar ese memo
    const increment =  useCallback(
      (value) => { //El value es el parametro que esta enviando la funcion
        setCounter((c) => c + value);
      },
      [],
    );


    return (
        <>
            <h1> UseCallback Hook: {counter} </h1>
            <hr />
            <ShowIncrement increment={increment}/>

        </>
    )
}
