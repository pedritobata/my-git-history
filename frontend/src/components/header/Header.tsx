import React, { useState, useEffect } from "react";
import { Jumbotron, Container, Row, Col, Image, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import State from "../../store/interfaces/state";
import Loader from "../commons/Loader";
import ModalExploreUser from "../modalExploreUser/ModalExploreUser";
import { getUser } from "../../store/actions/userActions";
import { DEFAULT_OWNER } from "../../store/constants/commonConstants";

type HeaderProps = {};


const Header: React.FC<HeaderProps> = ({ children }) => {
  const { user, loading, error } = useSelector((state: State) => state.user);
  const dispatch = useDispatch();

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if(user?.login){
      dispatch(getUser(user.login));
    }else{
      dispatch(getUser(DEFAULT_OWNER));
    }
  }, []);

  const openChangeUserHandler = () => {
    setShowModal(true);
  };

  const changeUserHandler = () => {
    setShowModal(false);
  };

  return (
    <header>
      <ModalExploreUser
        show={showModal}
        animation={true}
        onHide={changeUserHandler}
      />
      <Jumbotron className="bg-dark" fluid>
        <Container>
          <Row>
            <Col sm={8}>
              <h1 className="text-white">Commit Explorer</h1>
              <p className="text-white">
                Here you can see all the commits that were made to any branch in
                any Github repo you want to.
              </p>
            </Col>
            <Col sm={4} className="d-flex flex-column align-items-center"
            style={{ width: "180px", height: "180px" }}>
              {loading ? (
                <Loader animation="grow" variant="light" style={{ width: "100%", height: "100%" }}/>
              ) : (
                <div className="h-100 w-100">
                  <a
                  href={`https://www.github.com/${user.login}`}>
                    <Image
                      className="rounded-circle w-75 h-75"
                     
                      
                      src={user.avatar_url}
                      alt={user.login}
                    />
                  </a>
                  <p className="font-weight-bold text-white">
                    {user.name ? user.name : user.login}
                  </p>
                  <Button
                    onClick={openChangeUserHandler}
                    variant="outline-success"
                    size="sm"
                  >
                    Explore other user's repo
                  </Button>
                  </div>
              )}
            </Col>
          </Row>
        </Container>
      </Jumbotron>
    </header>
  );
};

export default Header;
