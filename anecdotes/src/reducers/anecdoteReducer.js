import { createSlice } from '@reduxjs/toolkit'
import service from '../services/anecdotes'

const getId = () => (100000 * Math.random()).toFixed(0)

const anecdotesSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    
    anecdoteReducer(state, action){
    const anecdote = {
      content: action.payload,
      id: getId(),
      votes: 0
    }
    state.push(anecdote)
  service.saveAnecdote(anecdote)
      },
addVote(state, action){
  return state.map(entry => entry.id !== action.payload ? entry : {...entry, votes: entry.votes + 1}).sort((a, b) => b.votes - a.votes)
},
setAnecdotes(state, action)
{
  return action.payload
}
}
})

export const {anecdoteReducer, addVote, setAnecdotes} = anecdotesSlice.actions
export default anecdotesSlice.reducer