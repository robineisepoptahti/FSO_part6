import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import {saveAnecdote} from '../services/anecdotes'
import { useContext } from 'react'
import MsgContext from './MsgContext'

const AnecdoteForm = () => {
const queryClient = useQueryClient()
const [msg, dispatch] = useContext(MsgContext)

  const newNoteMutation = useMutation({ mutationFn: saveAnecdote, onSuccess: (data) => {
    queryClient.invalidateQueries({queryKey: ['anecdotes']})
    dispatch({ type: "SET", payload: `Created anecdote '${data.content}'` })
  },
 })

  const onCreate = (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    newNoteMutation.mutate({content})
    console.log('new anecdote')
}

  return (
    <div>
      <h3>create new</h3>
      <form onSubmit={onCreate}>
        <input name='anecdote' />
        <button type="submit">create</button>
      </form>
    </div>
  )
}

export default AnecdoteForm
