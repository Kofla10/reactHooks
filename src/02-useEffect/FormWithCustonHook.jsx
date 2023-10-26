import React, { useEffect } from 'react'
import useFormWithCuston from './hook/useFormWithCuston';

export const FormWithCustonHook = () => {

  const {username, email, password,handleInpueChange, handleReset} = useFormWithCuston({
                                                  username: '',
                                                  email   : '',
                                                  password: ''
                                                })

                                                
  //nos ahorramos este  si desestructuramos el objeto, cuando enviamos la informacion desde el hook ...dataForm
  // const {username, email, password} = dataForm; 
  
  useEffect(() => {
    handleInpueChange
   }, [])

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
        
        <input type="password"
               className='form-control'
               name='password'
               placeholder='Password'
               value={password}
               onChange={handleInpueChange}
        />

        <button className='btn btn-primary mt-2' onClick={handleReset}> Reset</button>
      
    
    </>
  )
}
