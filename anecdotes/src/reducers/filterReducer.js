const filterReducer = (state = '', action) => {
    switch(action.type){
      case 'SET_FILTER':
        return action.payload
       case 'RESET_FILTER':
        return action.payload
      }
    console.log('state now: ', state)
    console.log('action', action)
  
    return state
  }

  export const filterChange = filter => {
    return {
      type: 'SET_FILTER',
      payload: filter,
    }
  }

  export const filterReset = () => {
    return {
      type: 'RESET_FILTER',
      payload: '',
    }
  }
  
  export default filterReducer