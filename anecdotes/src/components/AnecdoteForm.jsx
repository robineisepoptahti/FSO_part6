import {anecdoteReducer} from '../reducers/anecdoteReducer'
import {notificationReducer} from '../reducers/notificationReducer'
import { useDispatch } from 'react-redux'

const AnecdoteForm = () => {

const dispatch = useDispatch()
const addAnecdote= (event) => {
    event.preventDefault()
    const content = event.target.note.value
    event.target.note.value = ''
    dispatch(anecdoteReducer(content))
    dispatch(notificationReducer(`Created anecdote '${content}'`))
    setTimeout(() => {
      dispatch(notificationReducer(''))
    }, 5000)
  }

return(
<div>
<h2>create new</h2>
<form onSubmit={addAnecdote}>
  <div><input name="note"/></div>
  <button type="submit" >create</button>
</form>
</div>)
}
export default AnecdoteForm