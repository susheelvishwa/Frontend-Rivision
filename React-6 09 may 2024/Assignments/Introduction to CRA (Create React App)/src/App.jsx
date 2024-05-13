import React from 'react'

const App = () => {

  const [count, setCount] = React.useState(0)
  
  function handleCount() {
    setCount(count+1)
  }

  return (
    <div>
      <h1>Counter Application</h1>
      <h4>Count : {count}</h4>
      <button onClick={handleCount}>INC count</button>
    </div>
  )
}

export default App