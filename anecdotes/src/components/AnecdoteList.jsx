import { useSelector} from 'react-redux'
import Vote from './Vote'

const AnecdoteList = () => {
const anecdotes = useSelector(state => state)

    return (
    <div>      
    {anecdotes.sort((a, b) => b.votes - a.votes).map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <Vote id={anecdote.id} />
          </div>
          </div>
    )}
        </div>
    )
}
export default AnecdoteList