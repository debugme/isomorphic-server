import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../actions/fetchUsers'

class UsersList extends Component {
  componentDidMount = () => {
    this.props.fetchUsers()
  }
  render = () => {
    const { users } = this.props
    const usersList = this.renderUsers(users)
    return <ul>{usersList}</ul>
  }
  renderUsers = (users) => {
    const usersInfo = users.map(({ name }, index) => ({ key: `${name}${index}`, value: name}))
    const usersList = usersInfo.map(({ key, value }) => <li key={key}>{value}</li>)
    return usersList
  }
}

const mapStateToProps = (state) => (
  {
    users: state.users
  }
)

const loadData = (store) => store.dispatch(fetchUsers())

export { loadData }

export default connect(mapStateToProps, { fetchUsers })(UsersList)
