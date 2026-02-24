import { useContext } from 'react'
import { createContext, useState } from 'react'

// 1. Create Context
const CounterContext = createContext()

// 2. Create parent component
const Counter = ({ children }) => {
  const [count, setCount] = useState(0)

  const increment = () => setCount((count) => count + 1)
  const decrement = () => setCount((count) => count - 1)

  return (
    <CounterContext.Provider value={{ count, increment, decrement }}>
      <span>{children}</span>
    </CounterContext.Provider>
  )
}

// 3. Create child components

function Label({ children }) {
  return <span>{children}</span>
}

function Increment({ icon }) {
  const { increment } = useContext(CounterContext)
  return <button onClick={increment}>{icon}</button>
}

function Decrement({ icon }) {
  const { decrement } = useContext(CounterContext)
  return <button onClick={decrement}>{icon}</button>
}

function Count() {
  const { count } = useContext(CounterContext)
  return <span>{count}</span>
}

// 4. add child components to parent component
Counter.Label = Label
Counter.Increment = Increment
Counter.Decrement = Decrement
Counter.Count = Count

export default Counter
