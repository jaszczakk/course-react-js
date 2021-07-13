import { PureComponent, useContext } from 'react';

import { AppContext } from './AppContext';

const Button = () => {
  const { toggleLoggedState } = useContext(AppContext)

  return (
    <button onClick={toggleLoggedState}>
      Przełącz stan użytkownika
    </button>
  );
}

export default Button;