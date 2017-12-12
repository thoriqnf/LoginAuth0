import React, { Component } from "react";
import Auth0Lock from "auth0-lock";
import { Grid, Row, Col } from "react-bootstrap";
import Header from "./Components/Header";
import Home from "./Components/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends Component {
  static defaultProps = {
    clientId: "yAxXaTSsgnXusaEQwsrRIX8zeZMwyTPl",
    domain: "thoriqnf.auth0.com"
  };

  componentWillMount() {
    this.lock = new Auth0Lock(this.props.clientId, this.props.domain);

    // On authentication
    this.lock.on("authenticated", authResult => {
      this.lock.getProfile(authResult.idToken, (error, profile) => {
        if (error) {
          console.log(error);
          return;
        }

        console.log(profile);
      });
    });
  }

  showLock() {
    this.lock.show();
  }

  render() {
    return (
      <div className="App">
        <Header onLoginClick={this.showLock.bind(this)} />
        <Grid>
          <Row>
            <Col xs={12} md={12}>
              <Home />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
