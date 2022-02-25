import { connect } from "react-redux";
import { postAddAction } from "../../store/postReducer";
import Profile from "./Profile";

const mapStateToProps = (state) => ({
    posts: state.posts
});

const mapDispatchToProps = (dispatch) => ({
    addPost: text => dispatch(postAddAction(text))
});

const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile);

export { ProfileContainer };