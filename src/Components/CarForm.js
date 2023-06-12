import React, { useEffect, useState } from 'react'
import Header from './Header'
import '../CascadingStyleSheet/carForm.css'

const CarForm = () => {

    
    const[cardata,setCarData] = useState(localStorage.carDetails?JSON.parse(localStorage.getItem("carDetails")):[]);
   
    const[getinput,setGetInput] = useState({
        image:"",
        carName:"",
        carModel:"",
        carColor:"",
        carMileage:"",
        carPrice:"",
        carTitle:"",
        carDesc:"",
        dealerName:""
    })

    function handleChange(key,value){

        setGetInput({...getinput,[key]:value})
    }

    function handleClick(e){
        e.preventDefault();
        setCarData([...cardata,getinput]);
        setGetInput({  image:"",
        carName:"",
        carModel:"",
        carColor:"",
        carMileage:"",
        carPrice:"",
        carTitle:"",
        carDesc:"",
        dealerName:""
    })
    }

    useEffect(()=>{
    localStorage.setItem("carDetails",JSON.stringify(cardata))
    },[cardata])

  return (
    <>
    <Header/>
    <form>
        <h1 className='formTitle'>Enter Your Car Specifications:-</h1>
        <div className='carForm'>
            <div className='inputImageBox'>
                <input type='file' className='inputImage' onChange={(e)=>handleChange('image',e.target.value)} value={getinput.image} alt='inputImage' required></input>
            </div>
            <div className='commonDetails'>
                <input type='text' className='inputCarName inputUser' onChange={(e)=>handleChange('carName',e.target.value)} value={getinput.carName} placeholder='Enter Your Car Name' required></input>
                <input type='text' className='inputCarModel inputUser' onChange={(e)=>handleChange('carModel',e.target.value)} value={getinput.carModel} placeholder='Enter Your Car Model' required></input>
                <input type='text' className='inputCarColor inputUser' onChange={(e)=>handleChange('carColor',e.target.value)} value={getinput.carColor} placeholder='Enter Your Car Color' required></input>
                <input type='text' className='inputCarMilage inputUser' onChange={(e)=>handleChange('carMileage',e.target.value)} value={getinput.carMileage} placeholder='Enter Your Car Mileage' required></input>
                <input type='number' className='inputCarPrice inputUser' onChange={(e)=>handleChange('carPrice',e.target.value)} value={getinput.carPrice} placeholder='₹ Price' required></input>
            </div>
            <hr/>
            <div className='extraDetails'>
                <input type='text' className='inputCarTitle inputUser' onChange={(e)=>handleChange('carTitle',e.target.value)} value={getinput.carTitle} placeholder='Enter Title.....' required></input>
                <textarea type='text' className='inputCarDesc inputUser' onChange={(e)=>handleChange('carDesc',e.target.value)} value={getinput.carDesc} placeholder='Enter Description.....' required></textarea>
            </div>
            <div className='dealerDetails'>
                <input type='text' className='inputDealerName inputUser' onChange={(e)=>handleChange('dealerName',e.target.value)} value={getinput.dealerName} placeholder='Enter Dealer Name*' required></input>                
            </div>
            <div className='btnBox'>
                <button className='submitCarBtn' onClick={handleClick}>Ready For Sale</button>
            </div>
        </div>
    </form>
    </>
  )
}

export default CarForm