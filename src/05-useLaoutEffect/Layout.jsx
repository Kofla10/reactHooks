import React, {useState, useEffect} from 'react'
import useFech from './helpers/useFech'
import GetCard from './GetCard';

const Layout = () => {

    const [num, setNum] = useState(1);

    const {product} = useFech(num);

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

          <GetCard  product={product}/>
      </>
  )
}

export default Layout
