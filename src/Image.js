import React from 'react';

const Image = (props)=>{
  return (
    <div>
      <img src={props.link} alt="JS.jpg" height={props.tinggi} width={props.lebar}/>
    </div>
  )
}

export default Image
