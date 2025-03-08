import { useDispatch } from 'react-redux'
import {addVote} from '../reducers/anecdoteReducer'
import PropTypes from 'prop-types'



const Vote = ( {id} ) => {
  const dispatch = useDispatch()
    const handleVote = () => {
      console.log('vote', id)
      dispatch(addVote(id))
    }
    return (
      <button onClick={handleVote}>vote</button>
    )
  }

Vote.propTypes = {
    id: PropTypes.string.isRequired
  }

export default Vote