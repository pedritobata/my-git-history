import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Table, Button, Row, Col, Image } from "react-bootstrap";
import State from "../../store/interfaces/state";
import { listCommits } from "../../store/actions/commitActions";
import Loader from "../../components/commons/Loader";
import Message from "../../components/commons/Message";

const DEFAULT_OWNER = "pedritobata";
const DEFAULT_REPO = "my-git-history";
const DEFAULT_BRANCH = "master";

const Commits: React.FC = () => {
  const { commitList, loading, error } = useSelector(
    (state: State) => state.commits
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listCommits(DEFAULT_OWNER, DEFAULT_REPO, DEFAULT_BRANCH));
  }, []);

  return loading ? (
    <Loader />
  ) : error ? (
    <Message variant="danger">{error}</Message>
  ) : (
    <main>
      <Row className="d-flex align-items-center my-3">
        <h5 className="m-0">Exploring now :</h5>
  
        <p className="my-0 ml-3">
          <span>{commitList.repoOwnerNickname}</span>{" "}|{" "}
          <span className="text-primary font-weight-bold">{commitList.repoName}</span>
        </p>
      </Row>

      <Table striped bordered hover responsive className="table-sm">
        <tbody>
          {commitList.commitList.map((commit) => (
            <tr key={commit.commitDate}>
              <td className="d-flex flex-column p-2">
                <span>{commit.commitMessage}</span>
                <div>
                  <Image
                    className="rounded-circle"
                    style={{ width: "20px" }}
                    fluid
                    src={commit.committerAvatarUrl}
                    alt={commit.committerName}
                  />
                  <span className="ml-2 font-weight-bolder">
                    {commit.committerNickname}
                  </span>
                </div>
              </td>

              <td className="align-middle p-3">
                <a href={commit.commitHtmlUrl}>
                  <Button variant="outline-primary" className="btn-sm">
                    See details in github
                  </Button>
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </main>
  );
};

export default Commits;
