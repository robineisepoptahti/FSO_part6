import { useSelector} from 'react-redux'
import Vote from './Vote'

const AnecdoteList = () => {
const anecdotes = useSelector(state => state.anecdotes)
const filter = useSelector(state => state.filter)


    return (
    <div>      
    {anecdotes.sort((a, b) => b.votes - a.votes).map(anecdote => anecdote.content.toLowerCase().startsWith(filter.toLowerCase()) ?
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <Vote id={anecdote.id} />
          </div>
          </div>
    : null 
    )} 
        </div>
    )
}
export default AnecdoteList