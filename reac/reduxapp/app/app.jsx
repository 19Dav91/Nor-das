const React = require("react");
const ReactDOM = require("react-dom/client");
const redux = require("redux");
const Provider = require("react-redux").Provider;
const reducer = require("./reducer.jsx");
const AppView = require("./appview.jsx");
const ph = require("./phons.jsx");

const store = redux.createStore(reducer);

store.dispatch({
    type: "SET_STATE",
    state: {
        phones: ph
    }
});

ReactDOM.createRoot(
    document.getElementById("app")
)
    .render(
        <Provider store={store}>
            <AppView />
        </Provider>
    );