const FETCH_USERS = 'fetch_users'

const fetchUsers = () => {
  const getUsers = async (dispatch) => {
    const data = await fetch('https://react-ssr-api.herokuapp.com/users')
    const json = await data.json()
    const action = {
      type: FETCH_USERS,
      payload: json
    }
    dispatch(action)
  }
  return getUsers
}

export { FETCH_USERS, fetchUsers}
