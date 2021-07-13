import React, { PureComponent } from "react";
import { AppContext, defaultObject } from "./AppContext";
import UserInfo from "./UserInfo";
import Button from "./Button";

class App extends PureComponent {
  state = {
    isUserLogged: defaultObject.isUserLogged,
    isUserAdult: true,
  };

  render() {
    return (
      <div>
        <AppContext.Provider
          value={{
            isUserLogged: this.state.isUserLogged,
            toggleLoggedState: this.handleToggleStateIsLogged,
          }}
        >
          <UserInfo />
          <Button />
        </AppContext.Provider>
      </div>
    );
  }

  handleToggleStateIsLogged = () =>
    this.setState((prevState) => ({
      isUserLogged: !prevState.isUserLogged,
    }));
  handleToggleStateIsAdult = () =>
    this.setState((prevState) => ({
      isUserAdult: !prevState.isUserAdult,
    }));
}

export default App;
