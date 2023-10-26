import React, { useState, useEffect } from 'react'
import { Message } from './Message';

export const SimpleForm = () => {

  const [formState, setFormState] = useState({
    username: 'camilo',
    email   : 'juanKolfa@gmail.com'
  })

  //desestrcuturamos el formState
  const {username, email} = formState;

  //como recibimos el event, lo desestructuramos para sacar el target que es el valor que vamos a usar
  const handleInpueChange = ({target})=>{
    console.log(target.value);
    const {name, value} = target; //desestructuramos para obtener el value y el name 
    
    //actualizamos los datos del formulario
    setFormState({
        ...formState, 
        [name]: value, //cuando usamos [name] es para modificar el valor de la propiedad computada del objeto        
    })
  }

  //uso de los useEffect
  useEffect(() => {
    // console.log('useEffect called!');
    // console.log('FormState change!')
  }, [formState]); //cuando se le envía el parametro, va a estar a la escucha cuando el parametro que se envió cambie en este caso es el formState

  useEffect(() => {
    // console.log('The email change!');
  }, [email])
  //va a estar a la escucha de cuando el email cambie
  
  

  return (
    <>
        <h1>Simple Form</h1>
        <hr />
        <input type="text"
                className='form-control'
                placeholder='Username'
                name='username'
                value={username}
                onChange={handleInpueChange}
        />

        <input type="email" 
               className='form-control mt-2' 
               placeholder='juankofla@gmail.com'
               name='email'
               value={email}
               onChange={ handleInpueChange}
                />
        {
            (username === 'camilo p') && <Message/> 
        }
    
    </>
  )
}
