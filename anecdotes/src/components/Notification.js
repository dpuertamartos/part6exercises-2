import React from 'react'
import { connect } from 'react-redux'

const Notification = (props) => {
  const notification = props.notifications.content
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }
  return (
    <div style={style}>
      {notification.length>0 && notification}
    </div>
  )
}
const mapStateToProps = (state) => {
  return {
    notifications: state.notifications
  }
}
const ConnectedNotifications = connect(mapStateToProps)(Notification)
export default ConnectedNotifications