import { render } from "react-dom";
import { Provider } from "react-redux";
import { combineReducers, applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import reducers from "./reducers";
import App from "./App";
import sagas from "./sagas/imagesSagas";
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  combineReducers(reducers),
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(sagas);
const RootComponent = (): JSX.Element => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};
const rootElement = document.getElementById("root");
render(<RootComponent />, rootElement);
