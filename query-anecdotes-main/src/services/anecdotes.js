import axios from 'axios'



const baseUrl = 'http://localhost:3001/anecdotes'


export const getAll = async () => {
const response = await axios.get(baseUrl)
return response.data
}

const saveAnecdote = async (content) => {
     const getId = () => (100000 * Math.random()).toFixed(0)
     const anecdote = {
          content: content,
          id: getId(),
          votes: 0
        }
     const response = await axios.post(baseUrl, anecdote)
     return response.data
}

const updateLikes = async (id) => {
const response = await axios.get(baseUrl)
const entries = response.data
const entry = entries.find(anecdote => anecdote.id === id)
const url = `${baseUrl}/${id}`
const res = await axios.put(url, {...entry, votes: entry.votes + 1})
return res
}

