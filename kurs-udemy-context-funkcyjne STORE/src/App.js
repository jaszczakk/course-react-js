import UserInfo from "./UserInfo";
import React from "react";
import AppProvider from "./AppContext";
import Button from "./Button";

const App = () => (
  <div>
    <AppProvider>
      <UserInfo />
      <Button />
    </AppProvider>
  </div>
);

export default App;
