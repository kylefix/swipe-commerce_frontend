import React from 'react'
import { Dropdown } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { logout } from '../../../reducers/user'
import { Link } from 'react-router-dom'

const UserInfo = ({ displayName, dispatch }) => (
  <Dropdown text={displayName} pointing className="link item">
    <Dropdown.Menu>
      <Dropdown.Item>
        <Link to="/dashboard" style={{ color: 'black' }}>
          Seller Dashboard
        </Link>
      </Dropdown.Item>
      <Dropdown.Item>
        <Link to="/myorders" style={{ color: 'black' }}>
          My Orders
        </Link>
      </Dropdown.Item>
      <Dropdown.Item>
        <Link to="/profile" style={{ color: 'black' }}>
          Profile
        </Link>
      </Dropdown.Item>
      <Dropdown.Item onClick={() => dispatch(logout())}>Logout</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
)

const mapStateToProps = state => {
  const { user } = state
  return {
    displayName: user.displayName
  }
}

export default connect(
  mapStateToProps,
  null
)(UserInfo)
