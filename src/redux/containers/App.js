import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import App from "../../components/App"
import { loadData } from "../actions";

const mapStateToProps = state => ({
  items: state.loadDataReducer.items,
  isLoaded: state.loadDataReducer.isLoaded
});


const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      loadData,
    },
    dispatch,
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);