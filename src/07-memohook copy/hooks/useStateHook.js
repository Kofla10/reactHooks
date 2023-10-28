import {useState} from 'react'

//si el valor inicial no se enviar, por defecto sera 10
export const useStateHook = (valueInitial = 10) => {

    const [counter, setCounter] = useState(valueInitial);

    //si el value no se enviar, el valor sera 2 por defecto
    const handleIncrementar = (value = 2) => {
        setCounter(counter + value);
    }
  
    const handleRestar = (value = 2) => {
        setCounter(counter - value);
    }
    
    const handleReset = () =>{
        setCounter(valueInitial);
    }

    //en lo mayor posible, siempre enviar el retun como un objeto
    //para poder desestruturar el objeto
    return {
        counter,
        handleIncrementar,
        handleRestar,
        handleReset
    }
}
