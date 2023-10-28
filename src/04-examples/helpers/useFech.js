import { useState, useEffect } from "react";


const useFech = (num) => {

    const [product, setProduct] = useState([]);

    const getPost = async () => {
        const url  = `https://fakestoreapi.com/products/${num}`;
        const resp = await fetch(url)
        const inf  = await resp.json();
        setProduct(inf);
    }

      useEffect(() => {
          getPost();
      }, [num]);

      console.log(product)
    return {
        product
    };

}

export default useFech
