import React from 'react';
import { Link } from 'react-router-dom';
import useSound from "use-sound";

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
 
  const [play] = useSound(
    "http://codeskulptor-demos.commondatastorage.googleapis.com/pang/pop.mp3"
  );
  return(
City.map((item,index)=>{
  return(
   
    <Link  to={`/Cities/${item.Name}`} >
  <div onClick={play()} className='weather-city'>
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