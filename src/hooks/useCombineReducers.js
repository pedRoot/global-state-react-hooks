const useCombineReducers = reducers => {
  return (state, action) => {
    return Object.keys(reducers).reduce(
      (state, reduceIndex) => {
        return ({
          ...state,
          //...reducers[reduceIndex]({ [reduceIndex]: state[reduceIndex] }, action), // state to reducer
          ...reducers[reduceIndex](state, action), // all states to all reducers
        })
      },
      state
    )
  }
}

export default useCombineReducers;