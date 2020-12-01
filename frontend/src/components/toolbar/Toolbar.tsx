import React from "react";
import { Jumbotron, Container } from "react-bootstrap";

type ToolbarProps = {};

const Toolbar: React.FC<ToolbarProps> = ({ children }) => {
  return (
    <header>
        <Jumbotron fluid>
          <Container>
            <h1>Commit Explorer</h1>
            <p>
              Here you can see all the committs you've made to any branch in any repo you want to.
            </p>
          </Container>
        </Jumbotron>
    </header>
  );
};

export default Toolbar;
