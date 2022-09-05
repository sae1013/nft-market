import React from 'react'

interface WelcomeProps {
  name:string,
  age?:string | number
}

export default function welcome(props:WelcomeProps){
  
  return (
    <div>welcome {props.name}</div>
  )
}
