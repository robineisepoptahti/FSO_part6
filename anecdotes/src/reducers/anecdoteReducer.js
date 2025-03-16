import { createSlice } from '@reduxjs/toolkit'
import service from '../services/anecdotes'


const anecdotesSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
addVote(state, action){
  return state.map(entry => entry.id !== action.payload ? entry : {...entry, votes: entry.votes + 1}).sort((a, b) => b.votes - a.votes)
},
setAnecdotes(state, action)
{
  return action.payload
},
addAnecdotes(state, action)
{
  state.push(action.payload)
},
}
})

export const initialize = () => {
  return async dispatch => {
    const anecdotes = await service.getAll()
    dispatch(setAnecdotes(anecdotes))
  }
}

export const newAnecdote = (content) => {
  return async dispatch => {
    const res = await service.saveAnecdote(content)
    dispatch(addAnecdotes(res))
  }
}

export const {addAnecdotes, addVote, setAnecdotes} = anecdotesSlice.actions
export default anecdotesSlice.reducer