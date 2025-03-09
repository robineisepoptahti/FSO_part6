import { useSelector } from 'react-redux'

const Notification = () => {
  var style = {margin: 50}
  const notification = useSelector(state => state.notification)
  if (notification !== '')
     {
    style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
    margin: 20
  }
}
  return (
    <div style={style}>
      {notification}
    </div>
  )
}

export default Notification