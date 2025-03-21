import AnecdoteForm from './components/AnecdoteForm'
import Notification from './components/Notification'
import { useQueryClient, useQuery, useMutation } from '@tanstack/react-query'
import { getAll, saveAnecdote, updateLikes } from './services/anecdotes'
import msgContext from './components/MsgContext'
import {useContext} from 'react'
import { useReducer } from 'react'


const msgReducer = (state, action) => {
  switch (action.type) {
    case "SET":
        return action.payload
    case "CLEAR":
        return ""
    default:
        return state
  }
}

const App = () => {
  
  const queryClient = useQueryClient()
  const [msg, dispatch] = useReducer(msgReducer, '')
  //const [msg, dispatch] = useContext(msgContext)

  const newNoteMutation = useMutation({ mutationFn: updateLikes, onSuccess: (data) => {
    queryClient.invalidateQueries({queryKey: ['anecdotes']})
    dispatch({ type: "SET", payload: `Voted '${data.content}'` })
  },
 })

  const handleVote = (anecdote) => {
    newNoteMutation.mutate(anecdote.id)
    console.log('vote')
  }

  var anecdotes = [
    {
      "content": "If it hurts, do it more often",
      "id": "47145",
      "votes": 0
    },
  ]

  const result = useQuery(
    {
      queryKey: ['anecdotes'],
      queryFn: getAll,
      retry: 1
    }
  )
  if (result.isLoading) {
    return <div>loading data...</div>
  }
  if (result.isError) {
    return <div>Anecdote service not available due to problems in server</div>
  }

 anecdotes = result.data

  return (
    <msgContext.Provider value={[msg, dispatch]}>
    <div>
      <h3>Anecdote app</h3>
    
      <Notification />
      <AnecdoteForm />
    
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => handleVote(anecdote)}>vote</button>
          </div>
        </div>
      )}
    </div>
    </msgContext.Provider>
  )
}

export default App
