import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import InputGroup from "react-bootstrap/InputGroup";
import { listCommits } from '../../store/actions/commitActions';
import { useDispatch } from 'react-redux';

type ModalExploreUserProps = {
  show: boolean;
  animation: boolean;
  onHide: Function;
};

const ModalExploreUser: React.FC<ModalExploreUserProps> = (props) => {
  const [enteredUser, setEnteredUser] = useState("");
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  const dispatch = useDispatch();

  const userChangeHandler = (e) => {
    setEnteredUser(e.target.value);
    setShowErrorMessage(false);
  };

  const loadReposHandler = () => {
    if (!enteredUser) {
      return setShowErrorMessage(true);
    }
    dispatch(listCommits(enteredUser, 'xxx', 'master'));
    setEnteredUser('');
    setShowErrorMessage(false);
    props.onHide();
  };

  const hideHandler = () => {
    setEnteredUser('');
    setShowErrorMessage(false);
    props.onHide();
  }

  return (
    <Modal  {...props} onHide={hideHandler} aria-labelledby="contained-modal-title-vcenter" autofocus centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Explore a new User
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="my-3">
        <InputGroup className="mb-3">
          <FormControl
            value={enteredUser}
            onChange={userChangeHandler}
            placeholder="Enter a username"
            aria-label="Enter a username"
          />
          <InputGroup.Append>
            <Button variant="success" onClick={loadReposHandler}>
              Load repos
            </Button>
          </InputGroup.Append>
        </InputGroup>
        {showErrorMessage && (
          <InputGroup>
            <p className="text-danger d-block">Please provide a username.</p>
          </InputGroup>
        )}
      </Modal.Body>
    </Modal>
  );
};

export default ModalExploreUser;
