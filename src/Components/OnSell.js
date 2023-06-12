import React, { useEffect, useState } from 'react'
import CarDetails from './CarDetails';
import Header from './Header';
import { useNavigate } from 'react-router-dom';
import '../CascadingStyleSheet/onsell.css'

const OnSell = () => {

    const navigate = useNavigate();
    const[data,setData] = useState(localStorage.carDetails?JSON.parse(localStorage.getItem("carDetails")):[])

    const[getNewData,setGetNewData] = useState(true);
    const[oldData,setOldData] = useState();
    const[modify,setModify] = useState(data);

    function editCar(param){
        setOldData(data[param])
        let array = [...modify];
       
        array.splice(param,1);
        setModify(array)
        setGetNewData(false)
    }

    function removeItem(index){
        let array2 = [...modify];
        array2.splice(index,1);
        setModify(array2);
    }

    console.log(modify)
    function handleClick2(){
        let array2 = [...modify];
        array2.push(oldData);
        setModify(array2);
        navigate("/home")
    }

    useEffect(()=>{
        localStorage.setItem("carDetails",JSON.stringify(modify))   
        setData(JSON.parse(localStorage.getItem("carDetails")))
    },[modify])
    console.log(modify)

    function handleChange(key,value){
        setOldData({...oldData,[key]:value})
    }

   
  return (
    <div>
        <Header/>
        {
            getNewData==true?
            
                data.map((item,index)=>{
                    return <CarDetails data={item} func={editCar} func2={removeItem} key={index} index={index}/>
                })
            
        :
        <div className='updateForm'>
            <input type='text' className='updateInput' onChange={(e)=>handleChange('carName',e.target.value)} placeholder='Change Car Name..'></input>
            <input type='number' className='updateInput' onChange={(e)=>handleChange('carModel',e.target.value)} placeholder='Change Car Model..'></input>
            <input type='text' className='updateInput' onChange={(e)=>handleChange('carColor',e.target.value)} placeholder='Change Car Color..'></input>
            <input type='number' className='updateInput' onChange={(e)=>handleChange('carMileage',e.target.value)} placeholder='Change Car Mileage..'></input>
            <input type='number' className='updateInput' onChange={(e)=>handleChange('carPrice',e.target.value)} placeholder='Change Car Price..'></input>
            <input type='text' className='updateInput' onChange={(e)=>handleChange('carTitle',e.target.value)} placeholder='Change Car Title..'></input>
            <input type='text' className='updateInput' onChange={(e)=>handleChange('carDesc',e.target.value)} placeholder='Change Car Description..'></input>
            <input type='text' className='updateInput' onChange={(e)=>handleChange('dealerName',e.target.value)} placeholder='Change Car Dealer Name..'></input>
            <br/><button onClick={handleClick2} className='updateBtn'>Update Details</button>
        </div>
}
    </div>
  )
}

export default OnSell