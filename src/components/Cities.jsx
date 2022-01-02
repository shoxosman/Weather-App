import React from 'react';
import { Link } from 'react-router-dom';

const City=[
  {
Name :'Arbil' ,

  }
  ,{
        Name:'Kirkuk',
     },

{
Name :'sulaymaniyah',
  },
  
  {
    Name:'Duhok',
      },
  
       
]
const Cities= (props) =>{
 

  return(
City.map((item,index)=>{
  return(
   
    <Link  to={`/Cities/${item.Name}`} >
  <div className='weather-city'>
   <div className='cities'>
   <h2>{item.Name}</h2>
</div>
</div>
</Link> 

  )
}
)
      
  )
}
export default Cities;