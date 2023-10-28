import React, {memo} from 'react'
//esta es otra forma de declarar el memo, pero como estoy usando vite, me sale error
// const Small = REact.memo( ({value}) => {
const Small = memo( ({value}) => {
    console.log('me volvi a dibujar');
  return (
    <small>{value}</small>
  )
})

export default Small
