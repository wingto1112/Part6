
import React from 'react'
import { connect } from 'react-redux'

const Notification = (props) => {
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }
  if (props.notification === null) return ''
  return (
    <div style={style}>
      {props.notification}
    </div>
  )
}
const mapStateToProps = (state) => {
  return {
    notification: state.notification
  }
}
const ConnectedNoti = connect(mapStateToProps)(Notification)
export default ConnectedNoti