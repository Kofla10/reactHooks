import React, { useEffect, useState } from 'react'

export const Message = () => {

    const [coors, setCoors] = useState({ x: 0, y: 0 });
    const {x, y} = coors;

    useEffect(() => {
        console.log('se monto')
        //para remover tenemos que hacer referencia a la funcion, al espacion en memoria
        //donde esta defini da la funcion
        const onMouseMove = ({ x, y }) => {
            const coords = { x, y };
            console.log(x, y);
            setCoors({
                ...coors,
                x:x,
                y:y})


        }
        //se manda la funcion por referencia para que sea el mismo espacion en memorio
        window.addEventListener('mousemove', onMouseMove); //agregamos el listener

        return () => {
            window.removeEventListener('mousemove', onMouseMove); //para remover el listener es igual
        }
    }, [])



    return (
        <>
            {/* <h3>Usuario ya existe</h3> */}
            <h3>Las coordenadas son: {x} y {y}</h3>
        </>
    )
}
