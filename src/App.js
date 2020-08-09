import React, { Component, Fragment } from "react";
import PostForm from "./Components/PostForm";
import Posts from "./Components/Posts";
import SearchComponent from "./Components/SearchComponent";


import { Provider } from "react-redux";
import store from "./store";
class App extends Component {
  state = {}; 
  render() {
    return (
      <Provider store={store}>
        <Fragment>
          <div className="container my-4">
            <SearchComponent />
            <div className="row">
              <div className="col-md-6">
                <h4 className="h4 font-weight-bold text-uppercase">Create post</h4>
                <hr />
                <PostForm />
              </div>
              <div className="col-md-6">
                <h4 className="h4 font-weight-bold text-uppercase">
                  Publish
                </h4>
                <hr />
                <Posts />
              </div>
            </div>
          </div>
        </Fragment>
      </Provider>
    ); 
  }
}

export default App;
