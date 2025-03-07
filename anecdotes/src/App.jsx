import { useSelector, useDispatch } from 'react-redux'

const App = () => {
  const anecdotes = useSelector(state => state)
  const dispatch = useDispatch()

  const vote = (id) => {
    console.log('vote', id)
    dispatch(addVote(id))
  }

  const addVote = (id) => {
    return {
      type: 'ADD_VOTE',
      payload: { id }
    }
  }


  const addAnecdoteAction = (content) => {
    return {
      type: 'NEW_ANECDOTE',
      payload: content
    }
  }

  const addAnecdote= (event) => {
    event.preventDefault()
    const content = event.target.note.value
    event.target.note.value = ''
    dispatch(addAnecdoteAction(content))
  }


  return (
    <div>
      <h2>Anecdotes</h2>
      {anecdotes.sort((a, b) => b.votes - a.votes).map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      )}
      <h2>create new</h2>
      <form onSubmit={addAnecdote}>
        <div><input name="note"/></div>
        <button type="submit" >create</button>
      </form>
    </div>
  )
}

export default App