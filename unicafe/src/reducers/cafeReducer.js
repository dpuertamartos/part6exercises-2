/* eslint-disable default-case */
const initialState = {
    good: 0,
    ok: 0,
    bad: 0
  }
  
const counterReducer = (state = initialState, action) => {
    console.log(action)
    console.log(state.good)
    switch (action.type) {
        case 'GOOD':
        const changedState = {...state, good: state.good+1}
        return changedState 
        case 'OK':
        const changedOk = {...state, ok: state.ok+1}
        return changedOk
        case 'BAD':
        const changedBad = {...state, bad: state.bad+1}
        return changedBad
        case 'ZERO':
        const changedReset = {...state, good: 0, bad: 0, ok: 0}
        return changedReset
}
    return state
}

export default counterReducer