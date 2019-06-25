import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import Post from "../../components/Post"
import { dataDelete } from "../actions";

const mapStateToProps = state => ({
  items: state.loadDataReducer.items
});


const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      dataDelete,
    },
    dispatch,
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Post);