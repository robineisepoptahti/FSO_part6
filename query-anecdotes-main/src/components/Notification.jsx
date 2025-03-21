import { useReducer } from 'react'
import msgContext from './MsgContext'
import {useContext} from 'react'



const Notification = () => {
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
    marginBottom: 5
  }
  const [msg, msgDispatch] = useContext(msgContext)

  if (msg !== ''){
  return (
    <div style={style}>
    {msg}
    </div>
)
  }
}

export default Notification
