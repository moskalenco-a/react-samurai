import { connect } from "react-redux";
import { addMessageAction } from "../../store/dialogsReducer";
import Dialogs from './Dialogs';

const mapStateToProps = (state) => ({
  dialogsPage: state.dialogsPage
});

const mapDispatchOToProps = (dispatch) => ({
  addMessage: text => dispatch(addMessageAction(text))
});

const DialogsContainer = connect(mapStateToProps, mapDispatchOToProps)(Dialogs);

export { DialogsContainer }