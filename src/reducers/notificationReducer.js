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

/* export const changeNotification = (notification) => {
    return {
      type: 'CHANGE_NOTIFICATION',
      data: notification
    }
  } */

export const changeThenRemoveNotification = (notification, time) => {
    const timeMs = time * 1000
    return async dispatch => {
       await dispatch({type: 'CHANGE_NOTIFICATION', data: notification })
       setTimeout(()=>{dispatch({type: 'REMOVE_NOTIFICATION'})}, timeMs)
   }
}  

/* export const removeNotification = () => {
    return {
        type: 'REMOVE_NOTIFICATION'
    }
}   */

export default notificationReducer 