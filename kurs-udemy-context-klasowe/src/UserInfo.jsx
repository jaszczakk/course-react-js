import { PureComponent } from "react";

import { AppContext } from "./AppContext";

// GORSZA WERSJA JAK MOŻNA WYKORZYSTAĆ
// class UserInfo extends PureComponent {
//   render() {
//     return (
//       <AppContext.Consumer>npm start

//         {
//           ({isUserLogged}) => (
//             <div>
//               <p>Użytkownik jest { isUserLogged ? 'zalogowany' : 'niezalogowany' }</p>
//             </div>
//           )
//         }
//       </AppContext.Consumer>
//     );
//   }
// }

// LEPSZA WERSJA
class UserInfo extends PureComponent {
  static contextType = AppContext;

  render() {
    const { isUserLogged } = this.context;
    const userLoggedInfo = isUserLogged ? "zalogowany" : "niezalogowany";

    return (
      <div>
        <p>Użytkownik jest {userLoggedInfo}</p>
      </div>
    );
  }
}

export default UserInfo;
