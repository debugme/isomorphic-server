import { FETCH_USERS } from '../actions/fetchUsers'

const usersReducer = (state = [], action) => {
  const { type, payload: users } = action
  switch(type) {
    case FETCH_USERS:
      return users
    default:
      return state
  }
}

export { usersReducer }
