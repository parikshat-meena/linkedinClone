import React, { Component } from "react";
import { Link, Navigate } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoffee,
  faUser,
  faTruck,
  faWebAwesome,
  faFaceSmile,
} from "@fortawesome/free-solid-svg-icons";

export class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      flag: false,
    };
  }

  onNav = () => {
    this.setState({ flag: true });
  };

  render() {
    if (this.state.flag) {
      return <Navigate to="class" />;
    }
    return (
      <>
        <button onClick={() => this.onNav()}>nav to comp</button>

        <h2>
          Enjoy your <FontAwesomeIcon icon={faCoffee} /> coffee!
        </h2>
        <div>
          This is text
          <FontAwesomeIcon icon={faUser} />
          <FontAwesomeIcon icon={faFaceSmile} />
          {/* <i className="fa-regular fa-image"></i> */}
        </div>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">
              {/* Go somewhere */}

              <Link to="/func/1?name=akash&age=20">Nav To FuncComp</Link>
            </Button>
          </Card.Body>
        </Card>
      </>
    );
  }
}

export default Home;
