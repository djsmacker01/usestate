import React, {useState} from 'react'

function initialCount() {
  return 1
}

function Button() {
  const [count, setcount] = useState(initialCount())

function decrement (){
    setcount(previousCount => previousCount - 1)
  }

  function increment() {
    setcount(nextCount => nextCount + 1)
  }

  return (
   <div>
      <button onClick={ increment}>+</button>
      <span>{ count }</span>
    <button onClick={decrement}>-</button>
  </div>
)
 
  
  

}

export default Button;