import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./reducers/index";

const ReduxProvider = props => {
  const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return <Provider store={store}>{props.children}</Provider>;
};

export default ReduxProvider;
