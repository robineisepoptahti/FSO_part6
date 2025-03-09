import { useSelector} from 'react-redux'
import Vote from './Vote'

const AnecdoteList = () => {
const anecdotes = useSelector(state => state.anecdotes)
const filter = useSelector(state => state.filter)


    return (
    <div>      
    {anecdotes.map(anecdote => anecdote.content.toLowerCase().startsWith(filter.toLowerCase()) ?
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <Vote id={anecdote.id} name={anecdote.content}/>
          </div>
          </div>
    : null 
    )} 
        </div>
    )
}
export default AnecdoteList