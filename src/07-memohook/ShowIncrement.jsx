import React, {memo} from 'react'

export const ShowIncrement = memo (({increment}) => {
    console.log('me volvi a generar');

  return (
    <button
            className='btn btn-primary'
            onClick={ () => {
                increment(6); //Este es el parametro que esta en el usecallback
            }}
            >
        Increment
    </button>
  )
})



