import { GET_TYPES } from "../views/spacetypes";

import { postMethod, getMethod, putMethodJSON } from "../../../helper/api";

export const getSpaceDetailsData = getSpaceDetailsData => {
  return {
    type: GET_TYPES.GET_SPACE_TYPES,
    data: getSpaceDetailsData
  };
};

export const filterByYear = year => {
  return {
    type: GET_TYPES.FILTER_SPACE_BY_YEAR,
    year: year
  };
};

export const filterBySuccess = boolean => {
  return {
    type: GET_TYPES.FILTER_BY_SUCCESS,
    filterbySuccess: boolean
  };
};

export const getspaceDetails = () => {
  return async dispatch => {
    var initalConfigResponse = await getMethod(
      "https://api.spacexdata.com/v3/launches?limit=100",
      "",
      "",
      ""
    );
    console.log(initalConfigResponse, "initalConfigResponse");
    if (initalConfigResponse.data) {
      dispatch(
        getSpaceDetailsData({
          spaceDetails: { message: "success", data: initalConfigResponse.data }
        })
      );
    }
  };
};
