import { useDispatch } from 'react-redux'
import {addVote} from '../reducers/anecdoteReducer'
import {notificationReducer} from '../reducers/notificationReducer'
import PropTypes from 'prop-types'



const Vote = ( {id, name} ) => {
  const dispatch = useDispatch()
    const handleVote = () => {
      console.log('vote', id)
      dispatch(addVote(id))
      dispatch(notificationReducer(`You voted '${name}'`))
      setTimeout(() => {
      dispatch(notificationReducer(''))
          }, 5000)
    }
    return (
      <button onClick={handleVote}>vote</button>
    )
  }

Vote.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  }

export default Vote