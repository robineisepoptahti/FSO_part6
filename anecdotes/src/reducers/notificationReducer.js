import { createSlice } from '@reduxjs/toolkit'


const notificationSlice = createSlice({
    name: 'notification',
    initialState: '',
    reducers: {
    notificationReducer(state, action) {
      console.log('state now: ', state)
      console.log('action', action)
      return action.payload
      }
      }
    
    })
  
  export const { notificationReducer } = notificationSlice.actions
  export default notificationSlice.reducer