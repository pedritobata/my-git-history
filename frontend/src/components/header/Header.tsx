import React, { useState, useEffect } from "react";
import {
  Jumbotron,
  Container,
  Row,
  Col,
  Image,
  Button,
} from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import State from "../../store/interfaces/state";
import Loader from '../commons/Loader';
import ModalExploreUser from "../modalExploreUser/ModalExploreUser";
import { getUser} from '../../store/actions/userActions';

type HeaderProps = {};

const DEFAULT_OWNER = "pedritobata";

const Header: React.FC<HeaderProps> = ({ children }) => {
  const { user, loading, error } = useSelector((state: State) => state.user);
  const dispatch = useDispatch();

  const [showModal, setShowModal] = useState(false);

  useEffect(()=> {
    dispatch(getUser(DEFAULT_OWNER));
  },[]);

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
                <a href={`https://www.github.com/${user.login}`}>
                  <Image
                    className="rounded-circle"
                    style={{ width: "150px" }}
                    fluid
                    src={user.avatar_url}
                    alt={user.login}
                  />
                </a>
                <p className="font-weight-bold">{user.name ? user.name : user.login}</p>
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
