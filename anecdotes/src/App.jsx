import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'
import Notification from './components/Notification'
import Filter from './components/Filter'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import anecdoteServices from './services/anecdotes'
import {setAnecdotes} from './reducers/anecdoteReducer'


const App = () => {
  const dispatch = useDispatch()


  useEffect(() => {
    anecdoteServices.getAll().then(notes => {
      dispatch(setAnecdotes(notes))
    })
  }, [dispatch])
  return (
    <div>
    <h2>Anecdotes</h2>
    <Notification />
    <Filter />
    <AnecdoteForm />
    <AnecdoteList />
    </div>
  )
}

export default App