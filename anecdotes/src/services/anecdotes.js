import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
const response = await axios.get(baseUrl)
return response.data
}

const saveAnecdote = async (anecdote) => {
     await axios.post(baseUrl, anecdote)
}

export default {getAll, saveAnecdote}