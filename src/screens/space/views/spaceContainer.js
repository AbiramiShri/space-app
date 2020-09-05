import { connect } from "react-redux";
import * as spaceAction from "./spaceAction";
// import HomeComponent from "../home/homeComponent"
import SpaceComponent from "./spaceComponent";

/**
 * To Pass all State data to child Component
 * @param {all available states from Store} state
 */

const mapStateToProps = state => {
  // console.log(state, "state");
  var spaceData = state.spaceReducer.filteredSpaceDetails;
  var yearFilter = state.spaceReducer.yearFilter;
  return {
    spaceData,
    yearFilter
  };
};

/**
 * To dispatch all actions to child Component
 * @param {dispatch} event
 */
const mapDispatchToProps = dispatch => {
  return {
    getspaceDetails: () => {
      dispatch(spaceAction.getspaceDetails());
    },
    filterByYear: year => {
      dispatch(spaceAction.filterByYear(year));
    },
    filterBySuccess: value => {
      dispatch(spaceAction.filterBySuccess(value));
    }
  };
};

/**
 * To connect your state and actions to child component
 */
export default connect(mapStateToProps, mapDispatchToProps)(SpaceComponent);
