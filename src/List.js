import React from 'react';

const List = (props)=>{
  function handlePesan (value1,value2,value3){
    value3.preventDefault()
    alert ("name : "+value1)
    alert ("creator : "+value2)
  }
  return (
    <div>
      <ul>
        <li><a href={props.site} onClick={()=>handlePesan(props.name,props.creator)} target="_self" >{props.name}</a> = {props.creator}</li>
        <li><a href="/" alt="test" onClick={(a)=>handlePesan("bagus","junaedi",a)}>Teslinkwithfunction</a></li>
      </ul>
    </div>
  )
}

export default List
