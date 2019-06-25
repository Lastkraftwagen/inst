import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import App from "../../components/App"
import { loadData, dataDelete, postItem } from "../actions";

const mapStateToProps = state => ({
  items: state.loadDataReducer.items,
  isLoaded: state.loadDataReducer.isLoaded
});


const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      loadData,
      dataDelete,
      postItem
    },
    dispatch,
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);