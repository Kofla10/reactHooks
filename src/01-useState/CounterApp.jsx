import {useState} from 'react'




const CounterApp = () => {
  const [sum, setSum] = useState(1);
  return (
    <>
      <div>CounterApp {sum}</div>
      <button className='btn btn-primary' onClick={ () => setSum(sum + 1) }>Sum +1</button>
    </>
  )
}

export default CounterApp;
