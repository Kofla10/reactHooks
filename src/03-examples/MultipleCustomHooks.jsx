import React, {useState, useEffect} from 'react'
import useFech from './helpers/useFech'
import GetCard from './GetCard';

const MultipleCustomHooks = () => {

    
    const [product, setProdct] = useState([]);
    const [num, setNum] = useState(1);

    const getPost = async () => {      
      const newProduct = await useFech(num);
      setProdct(newProduct);
    }

    useEffect(() => {      
        getPost();
    }, [num]);

    const handleSum = () => {
      if(num >=20){
        alert('Llegasta al limite maximo');
        return;
      }

      setNum(num +1)
    }

    const handleResta = () => {
      if(num <=1){
        alert('Llegasta al limite minimo');
        return;
      }

      setNum(num -1)
    }
   
    return (
      <>
          <h1>BreakinBad Quote: {num}</h1>
          <button onClick={handleResta} className='btn btn-primary'> -1</button>
          <button onClick={handleSum} className='btn btn-primary'> +1</button>
          
          <GetCard key={product.id} product ={product}/>
      </>
  )
}

export default MultipleCustomHooks
