import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import axios from "axios";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";

import rootReducer from "./store/reducers/itemsReducer";

import HomeView from "./views/HomeView";
import ItemListView from "./views/ItemListView";
import ItemView from "./views/ItemView";
import FormView from "./views/FormView";
import "./styles.css";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk, logger))
);

class App extends React.Component {
  // add constructor and CDM
  constructor() {
    super();
    this.state = {
      editingId: null,
      activeItem: null
    };
  }

  render() {
    return (
      <div className="App">
        <nav>
          <h1 className="store-header">Dukaan</h1>
          <div className="nav-links">
            <NavLink exact to="/item-form">
              {this.state.isEditing ? "Update Item" : "Add item"}
            </NavLink>
            <NavLink exact to="/">
              Home
            </NavLink>
            <NavLink to="/item-list">Shop</NavLink>
          </div>
        </nav>

        <Route exact path="/" component={HomeView} />
        <Route
          exact
          path="/item-list"
          render={props => (
            <ItemListView
              {...props} // this is the same as below
              //               match={props.match}
              //               history={props.history}
              //               location={props.location}
              items={this.state.items}
              getItemById={this.getItemById}
            />
          )}
        />
        <Route path="/item-list/:id" component={ItemView} />
        <Route path="/item-form" render={props => <FormView {...props} />} />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  rootElement
);
