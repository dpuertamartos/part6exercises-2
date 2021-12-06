const notificationReducer = (state = {content: "", id: 0}, action) => {
    switch (action.type) {
        case 'CHANGE_NOTIFICATION':
            return {...state, content: action.data}
        case 'REMOVE_NOTIFICATION':
            return {...state, content: ""}  
        case 'CHANGE_ID':
            return {...state, id: action.data}      
        default:
            return state
    }
}


export const ChangeThenRemoveNotification = (notification, time) => {
    const timeMs = time * 1000
    return async dispatch => {
       await dispatch({type: 'CHANGE_NOTIFICATION', data: notification })
       let id1 = setTimeout(()=>{dispatch({type: 'REMOVE_NOTIFICATION'})}, timeMs)
       console.log(id1)
       dispatch({type: 'CHANGE_ID', data: id1})
   }
}  

export default notificationReducer 