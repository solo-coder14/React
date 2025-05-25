import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  {
    id: 1,
    value: 0
  },
  {
    id: 2,
    value: 0
  }
]

const countersSlice = createSlice({
    name: 'counters',
    initialState,
    reducers: {
        increment: (state, action) => {
            // const { id } = action.payload
            // const counter = state.find(counter => counter.id === id)
            // counter.value++
            const counterIndex = state.findIndex(counter => counter.id === action.payload)
            state[counterIndex].value++;
        },
        decrement: (state, action) => {
            // const { id } = action.payload
            // const counter = state.find(counter => counter.id === id)
            // counter.value--;
            const counterIndex = state.findIndex(counter => counter.id === action.payload)
            state[counterIndex].value--;
        },
        incrementByValue: (state, action)=>{
          const counterIndex = state.findIndex(counter => counter.id === action.payload)
          state[counterIndex].value += 2;
        }

    }
})

export const { increment, decrement, incrementByValue } = countersSlice.actions

export default countersSlice.reducer