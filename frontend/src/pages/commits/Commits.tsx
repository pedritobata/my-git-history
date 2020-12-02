import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Table,
  Button,
  Row,
  Col,
  Image,
  DropdownButton,
  Dropdown,
} from "react-bootstrap";
import State from "../../store/interfaces/state";
import { listCommits } from "../../store/actions/commitActions";
import Loader from "../../components/commons/Loader";
import Message from "../../components/commons/Message";
import { DEFAULT_OWNER, DEFAULT_BRANCH, DEFAULT_REPO} from "../../store/constants/commonConstants";


const Commits: React.FC = () => {
  const { commitList, loading, error } = useSelector(
    (state: State) => state.commits
  );
  const { user } = useSelector((state: State) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listCommits(DEFAULT_OWNER, DEFAULT_REPO, DEFAULT_BRANCH));
  }, []);

  const branchChangeHandler = (selectedBranch: string) => {
    dispatch(listCommits(user.login, commitList.repoName, selectedBranch));
  }

  return <main>
      {
        (loading && !commitList.repoName) ? (
          <Loader animation="border" variant="primary" />
        ) : error ? (
          <Message variant="danger">{error}</Message>
        ) : (
          <>
            <Row className="d-flex align-items-center my-3">
              <Col className="d-flex" sm={7}>
                <h5 className="m-0">Exploring now :</h5>
      
                <p className="my-0 ml-3">
                  <span>{commitList.repoOwnerNickname}</span> |{" "}
                  <a
                    href={`https://www.github.com/${commitList.repoOwnerNickname}/${commitList.repoName}`}
                  >
                    <span className="text-primary font-weight-bold">
                      {commitList.repoName}
                    </span>
                  </a>
                  <small className="ml-2">
                    ({commitList.commitList.length} commits)
                  </small>
                </p>
              </Col>
              <Col className="d-flex align-items-center justify-content-end" sm={5}>
                <span className="mr-2">{commitList.repoOwnerNickname}'s repos: </span>
      
                <DropdownButton title={commitList.repoName}>
                  {commitList.repos.map((item) => (
                    <Dropdown.Item href="#/action-1">
                      {item.name} - <span className="text-muted">{item.language}</span>
                    </Dropdown.Item>
                  ))}
                </DropdownButton>
              </Col>
            </Row>
            <Row className="mb-3">
              <DropdownButton title={commitList.branch} variant="secondary">
                {commitList.branches.map((item) => (
                  <Dropdown.Item onClick={branchChangeHandler.bind(null,item)}>{item}</Dropdown.Item>
                ))}
              </DropdownButton>
            </Row>
     </>
        )
      
                }
{
  loading ? (
    <Loader animation="border" variant="primary" />
  ) : error ? (
    <Message variant="danger">{error}</Message>
  ) : (
<Table striped bordered hover responsive className="table-sm">
        <tbody>
          {commitList.commitList.map((commit) => (
            <tr key={commit.commitDate}>
              <td className="flex-column p-2">
                <span>{commit.commitMessage}</span>
                <div>
                  <Image
                    className="rounded-circle"
                    style={{ width: "20px" }}
                    fluid
                    src={commit.committerAvatarUrl}
                    alt={commit.committerName}
                  />
                  <a
                    href={`https://www.github.com/${commitList.repoOwnerNickname}`}
                  >
                    <span className="ml-2 font-weight-bolder text-dark">
                      {commit.committerNickname}
                    </span>
                  </a>
                </div>
              </td>

              <td className="align-middle p-3 d-flex justify-content-center">
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
  )
}
      
    </main>

};

export default Commits;
