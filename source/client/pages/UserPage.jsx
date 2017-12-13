import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../actions/fetchUsers'

class UserPage extends Component {
  // After the component has been added to the DOM request users
  componentDidMount = () => {
    this.props.fetchUsers()
  }

  // Render users in a list
  render = () => {
    const { users } = this.props
    const usersList = this.renderUsers(users)
    return <ul>{usersList}</ul>
  }

  // Build a list of users
  renderUsers = (users) => {
    const usersInfo = users.map(({ name }, index) => ({ key: `${name}${index}`, value: name}))
    const usersList = usersInfo.map(({ key, value }) => <li key={key}>{value}</li>)
    return usersList
  }
}

// Make users from state available on props
const mapStateToProps = (state) => ({
    users: state.users
  }
)

// Update the passed in store with user data
const loadData = (store) => store.dispatch(fetchUsers())

// Wire up the component with Redux
const component = connect(mapStateToProps, { fetchUsers })(UserPage)

export default {
  component,
  loadData
}
