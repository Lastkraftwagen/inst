import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import Post from "../../components/ModalAdd"
import { postItem } from "../actions";

const mapStateToProps = state => ({
  items: state.loadDataReducer.items
});


const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      postItem,
    },
    dispatch,
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Post);