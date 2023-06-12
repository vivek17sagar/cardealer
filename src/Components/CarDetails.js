import React from 'react'
import '../CascadingStyleSheet/cardetails.css'
import image from '../images/pngImage.png'

const CarDetails = ({data,func,func2,index}) => {
    
    
    
  return (
    <>

    <div className='CarDetails'>
        <div className='carImage'>
            <img src={image} alt='carImage'></img>
        </div>
    <div>
        <div className='carHeadLine'>
            <h1>{data.carName}</h1>
            <h3>model: {data.carModel}</h3>
            <h4>Price: ₹{data.carPrice}</h4>
        </div>
        <div>
            <ul>
                <li>Color: {data.carColor}</li>
                <li>Mileage: {data.carMileage} Kmph</li>
                <li>{data.carTitle}</li>
                <li>{data.carDesc}</li>
            </ul>
        </div>
        <h4>Dealer Name: {data.dealerName}</h4>
        <p onClick={()=>func(index)} className='modifier'>Edit</p>
        <p onClick={()=>func2(index)} className='modifier'>Remove</p>
    </div>
    
    </div>
    <hr/>
    </>
  )
}

export default CarDetails