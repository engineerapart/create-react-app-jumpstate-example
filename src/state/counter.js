import Jumpstate from 'jumpstate'

export default Jumpstate({
  // Initial State
  initial: {
    count: 0
  },
  // Actions
  increment (state) {
    return { count: ++state.count }
  },
  decrement (state) {
    return { count: --state.count }
  }
})