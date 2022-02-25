import { connect } from "react-redux";
import { UsersList } from "./UsersList";
import { toggleFollowingAction } from "../../store/usersListReducer";
import { setUsersAction } from "../../store/usersListReducer";

const mapStateToProps = (state) => ({
  users: state.users
});

const mapDispatchToProps = (dispatch) => ({
  toggleFollowing: index => dispatch(toggleFollowingAction(index)),
  setUsers: users => dispatch(setUsersAction(users))
});

const UsersListContainer = connect(mapStateToProps, mapDispatchToProps)(UsersList);

export { UsersListContainer }
