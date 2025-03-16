import { createSlice } from '@reduxjs/toolkit'


const notificationSlice = createSlice({
    name: 'notification',
    initialState: '',
    reducers: {
    setMsg(state, action) {
      return action.payload
      },
    clearMsg() {
      return ''
      }

    }
    
  })


  export const setNotifications = (msg, time) =>
  {
    return dispatch => {
      dispatch(setMsg(msg))
      setTimeout(() => {
      dispatch(clearMsg())
      }, time * 1000)
    }
  }
  
  export const { setMsg, clearMsg } = notificationSlice.actions
  export default notificationSlice.reducer