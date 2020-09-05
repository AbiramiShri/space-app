import React, { Component } from "react";
import { store } from "../../../store/store";
import { getspaceDetails } from "./spaceAction";

export default class SpaceComponent extends Component {
  componentDidMount() {
    store.dispatch(getspaceDetails());
  }
  render() {
    console.log(this.props, "props only");
    console.log(
      this.props.spaceData && this.props.spaceData.spaceDetails,
      "space componnt"
    );
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <h3>Space X Launch Programs</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-lg-2  mt-3 px-0 ">
            <div className="bg-light rounded px-3">
              <div className="row">
                <div className="col-12 px-0">
                  <h4>Filters</h4>
                </div>
              </div>
              <div className="row">
                <div className="col-12 px-0 mr-3">
                  <p className="text-center border-bottom">Launch Year</p>
                </div>
                {this.props.yearFilter &&
                  this.props.yearFilter.length > 0 &&
                  this.props.yearFilter.map((spaceData, i) => {
                    return (
                      <div
                        key={i}
                        className="col-6 px-1"
                        onClick={() => {
                          this.props.filterByYear(spaceData.launch_year);
                        }}
                      >
                        <p className="space_launch_year rounded px-2">{spaceData.launch_year}</p>
                      </div>
                    );
                  })}
              </div>
              <div className="row">
                <div className="col-12 px-0 mr-3">
                  <p className="text-center border-bottom">Successfull Launch</p>
                </div>
                <div
                  className="col-6 px-1"
                  onClick={() => {
                    this.props.filterBySuccess(true);
                  }}
                >
                  <p className="space_launch_year rounded px-2"> TRUE</p>
                </div>
                <div
                  className="col-6 px-1"
                  onClick={() => {
                    this.props.filterBySuccess(false);
                  }}
                >
                  <p className="space_launch_year rounded px-2"> FALSE</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-10 px-0 px-lg-3">
            <div className="row">
              {this.props.spaceData &&
                this.props.spaceData.map((spaceData, i) => {
                  return (
                    <div
                      key={i}
                      className="col-12 col-sm-6 col-md-4 col-lg-3 my-3 rounded px-0 px-sm-2 "
                    >
                      <div className="border bg-light rounded px-3">
                        <div className="row">
                          <div className="col-12 px-0 mt-3 bg-gray rounded">
                            <img
                              src={spaceData.links.mission_patch_small}
                              className="img-fluid d-block mx-auto "
                            />
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-12  px-0">
                            <h3>
                              {spaceData.mission_name} #{spaceData.flight_number}
                            </h3>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-6  px-0">
                            <label>Mission id's</label>
                          </div>
                          <div className="col-6  px-0">
                            {spaceData.mission_id &&
                              spaceData.mission_id.map((mission_id, i) => {
                                return <li>{mission_id}</li>;
                              })}
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-6  px-0">
                            <label>launch year</label>
                          </div>
                          <div className="col-6 ">
                            <p>{spaceData.launch_year}</p>
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-6  px-0">
                            <label>Successfull Launch</label>
                          </div>
                          <div className="col-6">
                            <p>
                              {spaceData.launch_success === false
                                ? "False"
                                : "True"}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>

        </div>
        <div className="row">
          <div className="col-12">
            <p className="text-center"><b>Developed by : </b>Abirami Shri</p>
          </div>
        </div>
      </div>
    );
  }
}
