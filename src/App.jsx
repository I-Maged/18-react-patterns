import Counter from './Counter'

const App = () => {
  return (
    <div>
      <h1>Compound Component Pattern</h1>
      {/* <div>
        <Counter
          iconIncrease='+'
          iconDecrease='-'
          label='My NOT so flexible counter'
          hideLabel={false}
          hideIncrease={false}
          hideDecrease={false}
        />
      </div> */}

      <div>
        <Counter>
          <Counter.Label>Flexible Compound Component</Counter.Label>
          <Counter.Increment icon='+' />
          <Counter.Count />
          <Counter.Decrement icon='-' />
        </Counter>
      </div>
    </div>
  )
}

export default App
