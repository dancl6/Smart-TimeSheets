import logo from './logo.svg';
import './App.css';
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';

import User_Login from "./pages/User_Login";
import Nav from "./components/Nav";
// import { StoreProvider } from "./utils/GlobalState";
import Home from "./pages/Home";

const client = new ApolloClient({
  request: (operation) => {
    const token = localStorage.getItem('id_token')
    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : ''
      }
    })
  },
  uri: '/graphql',
})


function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          {/* <StoreProvider> */}
            <Nav />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={User_Login} />
              {/* <Route exact path="/signup" component={Signup} />
              <Route exact path="/orderHistory" component={OrderHistory} />
              <Route exact path="/products/:id" component={Detail} />
              <Route exact path="/success" component={Success} />
              <Route component={NoMatch} /> */}
            </Switch>
          {/* </StoreProvider> */}
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
