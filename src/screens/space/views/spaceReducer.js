import { GET_TYPES } from "./spacetypes";
const initialState = {
  filteredSpaceDetails: [],
  spaceDetails: [],
  yearFilter: [],
  filterbySuccessLaunch: null,
  filterYear: null
};

const getYearData = yearData => {
  let result = [];
  let yearFilterObj = {};
  yearData.map(yearObj => {
    if (!yearFilterObj[yearObj.launch_year]) {
      result.push(yearObj);
      yearFilterObj[yearObj.launch_year] = true;
    }
  });
  return result;
};

const getFilteredSpaceDetails = state => {
  if (state.filterbySuccessLaunch != null && state.filterYear != null) {
    return state.spaceDetails.filter(
      spacePbj =>
        spacePbj.launch_year == state.filterYear &&
        spacePbj.launch_success === state.filterbySuccessLaunch
    );
  } else if (state.filterbySuccessLaunch != null) {
    return state.spaceDetails.filter(
      spacePbj => spacePbj.launch_success == state.filterbySuccessLaunch
    );
  } else if (state.filterYear != null) {
    return state.spaceDetails.filter(
      spacePbj => spacePbj.launch_year == state.filterYear
    );
  } else {
    return state.spaceDetails;
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_TYPES.GET_SPACE_TYPES:
      return {
        ...state,
        filteredSpaceDetails: action.data.spaceDetails.data,
        spaceDetails: action.data.spaceDetails.data,
        yearFilter: getYearData(action.data.spaceDetails.data)
      };
    case GET_TYPES.FILTER_SPACE_BY_YEAR:
      state.filterYear = action.year;
      return {
        ...state,
        filteredSpaceDetails: getFilteredSpaceDetails(state)
      };
    case GET_TYPES.FILTER_BY_SUCCESS:
      state.filterbySuccessLaunch = action.filterbySuccess;
      return {
        ...state,
        filteredSpaceDetails: getFilteredSpaceDetails(state)
      };
    default:
      return state;
  }
};
