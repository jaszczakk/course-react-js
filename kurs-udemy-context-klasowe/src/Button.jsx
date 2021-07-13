import { PureComponent } from "react";

import { AppContext } from "./AppContext";

class Button extends PureComponent {
  //static AppContext zamiast <AppContext.Consumer>, ktrórym obudowujemy komponenty
  static contextType = AppContext;

  render() {
    return (
      <button onClick={this.context.toggleLoggedState}>
        Przełącz stan użytkownika
      </button>
    );
  }
}

export default Button;
