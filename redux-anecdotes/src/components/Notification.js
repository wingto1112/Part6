
import React from 'react'
import { useSelector } from 'react-redux'

const Notification = () => {
  const noti = useSelector(state => state.notification)
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }
  if (noti === null) return ''
  return (
    <div style={style}>
      {noti}
    </div>
  )
}

export default Notification