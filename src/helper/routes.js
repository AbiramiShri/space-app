import React from "react";
import { Route, Switch } from "react-router-dom";
import SpaceContainer from "../screens/space/views/spaceContainer";
// import SpaceComponent from "../screens/space/views/spaceComponent";

class RoutesComponent extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route
            path="/"
            exact
            render={props => {
              return (
                <React.Fragment>
                  <SpaceContainer  {...this.props} {...props} />
                  {/* <JugTourListComponent {...this.props} {...props} /> */}
                </React.Fragment>
              );
            }}
          />
        </Switch>
      </React.Fragment>
    );
  }
}

export default RoutesComponent;
