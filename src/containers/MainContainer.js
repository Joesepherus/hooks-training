import React, { useState } from 'react'

const MainContainer = () => {
  const [count, setCount] = useState(0)
  const [fruit, setFruit] = useState('banana')
  const [todos, setTodos] = useState([{ text: 'Learn Hooks' }])

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>++</button>
      <p onClick={() => setFruit('apple')}>{fruit}</p>
      <p onClick={() => setTodos([{ text: 'hello' }])}>{todos[0].text}</p>
    </div>
  )
}

export default MainContainer
