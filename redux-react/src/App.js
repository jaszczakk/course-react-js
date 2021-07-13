import "./App.css";
import store from "./store/store";
import { Provider } from "react-redux";

const App = () => {
  return (
    <Provider store={store}>
      <div></div>
    </Provider>
  );
};

export default App;
