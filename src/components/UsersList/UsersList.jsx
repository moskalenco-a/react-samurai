import React from "react";

const UserItem = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      {/* <h2>Location: {props.location}</h2> */}
      <h2>{props.status}</h2>
      <h2 onClick={props.toggleFollowing}>
        {props.followed ? "Unfollow" : "Follow"}
      </h2>
    </div>
  )
}

class UsersList extends React.Component {
  componentDidMount() {
    const baseUrl = `https://social-network.samuraijs.com/api/1.0`;
    const url = `${baseUrl}/users`;
    fetch(url)
      .then(resp => resp.json())
      .then(data => this.props.setUsers(data.items));
  }

  render() {
    const users = this.props.users;
    return (
      <div>
        {users.map((user, index) => (
          <UserItem name={user.name}
            key={index}
            location={user.location}
            status={user.status}
            followed={user.followed}
            toggleFollowing={() => this.props.toggleFollowing(index)} />
        ))}
      </div>
    );
  }
}

export { UsersList }
