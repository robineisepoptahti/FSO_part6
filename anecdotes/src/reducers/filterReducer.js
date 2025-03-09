import { createSlice } from '@reduxjs/toolkit'

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
  filterReducer(state, action) {
    console.log('state now: ', state)
    console.log('action', action)
    return action.payload
    }
    }
  
  })

export const { filterReducer } = filterSlice.actions
export default filterSlice.reducer