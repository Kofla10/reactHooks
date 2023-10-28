import React, {useRef} from 'react'

export const FocusScreen = () => {

    const inputRef = useRef(); //vamos a crear una referencia al input
    console.log(inputRef)

    const onClick = () => {
        // document.querySelector('input').select(); //código para seleccionar el campo
        console.log(inputRef);
        inputRef.current.select(); //realiza el select de la referencia
    }

    return (
        <>
            <h1>Foxus Screen</h1>
            <hr />
            <input type="text"
                   ref={inputRef} //asignamos la referencia
                   className='form-control p-3 g-col-2'
                   placeholder='Ingrese su nombre'
                   name='focus'
            />
            <button className='btn btn-primary' onClick={onClick}> Focus </button>
        </>
    )
}
