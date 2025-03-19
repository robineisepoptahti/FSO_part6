import AnecdoteForm from './components/AnecdoteForm'
import Notification from './components/Notification'
import { useQueryClient, useQuery, useMutation } from '@tanstack/react-query'
import { getAll, saveAnecdote, updateLikes } from './services/anecdotes'

const App = () => {

  const queryClient = useQueryClient()
  
  const newNoteMutation = useMutation({ mutationFn: updateLikes, onSuccess: () => {
    queryClient.invalidateQueries({queryKey: ['anecdotes']})
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
  )
}

export default App
