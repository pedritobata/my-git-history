import React, { useState } from "react";
import {
  Jumbotron,
  Container,
  Row,
  Col,
  Image,
  Button,
} from "react-bootstrap";
import { useSelector } from "react-redux";
import State from "../../store/interfaces/state";
import Loader from '../commons/Loader';
import ModalExploreUser from "../modalExploreUser/ModalExploreUser";

type HeaderProps = {};

const Header: React.FC<HeaderProps> = ({ children }) => {
  const { commitList, loading } = useSelector((state: State) => state.commits);

  const [showModal, setShowModal] = useState(false);

  const openChangeUserHandler = () => {
    setShowModal(true);
  }

  const changeUserHandler = () => {
    setShowModal(false);
  }

  return (
    <header>
    <ModalExploreUser show={showModal} animation={true} onHide={changeUserHandler} />
      <ModalExploreUser  />
      <Jumbotron fluid>
        <Container>
          <Row>
            <Col sm={8}>
              <h1>Commit Explorer</h1>
              <p>
                Here you can see all the commits that were made to any branch in
                any repo you want to.
              </p>
            </Col>
            <Col sm={4}>
              {
                loading ? <Loader  /> : 
                (
                  <div className="d-flex flex-column align-items-center">
                <a href={`https://www.github.com/${commitList.repoOwnerNickname}`}>
                  <Image
                    className="rounded-circle"
                    style={{ width: "150px" }}
                    fluid
                    src={commitList.authorAvatarUrl}
                    alt={commitList.authorName}
                  />
                </a>
                <p className="font-weight-bold">{commitList.authorName}</p>
                <Button onClick={openChangeUserHandler} variant="outline-success">Explore other user repo</Button>
              </div>
                )
              }
            </Col>
          </Row>
        </Container>
      </Jumbotron>
    </header>
  );
};

export default Header;
