import { useDispatch } from 'react-redux'
import {newVote} from '../reducers/anecdoteReducer'
import {setNotifications} from '../reducers/notificationReducer'
import PropTypes from 'prop-types'



const Vote = ( {id, name} ) => {
  const dispatch = useDispatch()
    const handleVote = () => {
      console.log('vote', id)
      dispatch(newVote(id))
      dispatch(setNotifications(`you voted '${name}'`, 10))
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