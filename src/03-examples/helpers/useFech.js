import React from 'react'

const useFech = async(num) => {

    const url = `https://fakestoreapi.com/products/${num}`;
    const resp = await fetch(url)
    const data = await resp.json();

    console.data(data)

    return {
        data
    }
}

export default useFech
