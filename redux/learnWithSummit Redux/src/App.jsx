// import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Counter from "./components/Counter"
import Stats from "./components/Stats"
import { decrement, increment, incrementByValue } from "./features/counters/countersSlice";
import Posts from "./components/Posts";

// const intialCounters = [
//   {
//     id: 1,
//     value: 0
//   },
//   {
//     id: 2,
//     value: 0
//   }
// ] 


function App() {
  // const [counters, setCounters] = useState(initialCounters)
  const counters = useSelector((state)=> state.counters);
  const dispatch = useDispatch();

  //Total count
  const totalCount = counters.reduce((acc, counter) => acc + counter.value, 0)

  // const handleIncrement = (id) => {
  //   const updatedCounter = counters.map(counter => {
  //     if (counter.id === id) {
  //       // counter.value++
  //       return {
  //         ...counter,
  //         value: counter.value + 1
  //       }
  //     }
  //     return counter
  //   })
  //   setCounters(updatedCounter)
  // }

  const handleIncrement = (id) => {
    dispatch(increment(id));
  }

  // const handleDecrement = (id) => {
  //   const updatedCounter = counters.map(counter => {
  //     if (counter.id === id) {
  //       // counter.value--
  //       return {
  //         ...counter,
  //         value: counter.value - 1
  //       }
  //     }
  //     return counter
  //   })
  //   setCounters(updatedCounter)
  // }
  const handleDecrement = (id) => {
    dispatch(decrement(id));
  }
  const handleIncrementByValue = (id) => {
    dispatch(incrementByValue(id));
  }

  return (
    <>
      <h1 className='text-center'>Simple Counter Application
      <style jsx>
          {`
          .text-center {
            text-align: center;
            }
            `}
        </style>
      </h1>
      {
        counters.map(counter => (
          <Counter key={counter.id} count={counter.value} onIncrement={()=>handleIncrement(counter.id)} onDecrement={()=>handleDecrement(counter.id)} incrementByValue={()=>handleIncrementByValue(counter.id)} handlerId={counter.id} />
        ))
      }
      <Stats totalCount={totalCount}/>
      <Posts />
    </>
  )
}

export default App
