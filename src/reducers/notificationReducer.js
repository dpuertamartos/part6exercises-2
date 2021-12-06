const notificationReducer = (state = 'INITIAL MESSAGE', action) => {
    switch (action.type) {
        case 'CHANGE_NOTIFICATION':
            return action.data
        case 'REMOVE_NOTIFICATION':
            return ''   
        default:
            return state
    }
}

export const changeNotification = (notification) => {
    return {
      type: 'CHANGE_NOTIFICATION',
      data: notification
    }
  }

export const removeNotification = () => {
    return {
        type: 'REMOVE_NOTIFICATION'
    }
}  

export default notificationReducer 