import React from 'react'

const GetCard = ({product}) => {

    const {title, price, description, category, image } = product;

  return (
        <div className='card container'  style={{ width: "400px", height: "500px"}} >
            <h3 className='card-title container'>{title}</h3>
            <img  className='card-img container'
                  src={image}
                  alt={title}
                  style={{ width: "150px", height: "150px"}}
                  />
            <div className='card-title'>
                <h4 className='card-title container'>{price}</h4>
                <p className='card-text container'>{description}</p>
            </div>


        </div>
  )
}

export default GetCard
