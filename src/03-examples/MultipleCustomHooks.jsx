import React from 'react'
import useFech from './helpers/useFech'

const MultipleCustomHooks = () => {

    const {data} = useFech(1);
  return (
    <>
        <h1>BreakinBad Quote</h1>
    </>
  )
}

export default MultipleCustomHooks
