import React, { useState } from 'react'
import Count from './Count'
import Button from './Button'


function Counter({count, onIncrement, onDecrement, incrementByValue}) {
    // const [count, setCount] = useState(0);
    // const handleIncrement = () => {
    //     setCount(count + 1);
    // }
    // const handleDecrement = () => {
    //     setCount(count - 1);
    // }
    return (
        <div>
            <Count count={count}/>
            <div className='text-center'>
            <Button handler={onIncrement}>Increment</Button>
            <Button handler={incrementByValue}>IncreaseByTwo</Button>
            <Button type="danger" handler={onDecrement}>Decrement</Button>
            </div>
        </div>
    )
}

export default Counter
