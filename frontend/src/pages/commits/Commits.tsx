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
  Badge,
} from "react-bootstrap";
import State from "../../store/interfaces/state";
import { listCommits } from "../../store/actions/commitActions";
import Loader from "../../components/commons/Loader";
import Message from "../../components/commons/Message";
import {
  DEFAULT_OWNER,
  DEFAULT_BRANCH,
  DEFAULT_REPO,
} from "../../store/constants/commonConstants";
import { buildCommitListGroupedByDate, extractTime } from "../../utils/utils";

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
  };

  const repoChangeHandler = (repo: string) => {
    dispatch(listCommits(user.login, repo, "master"));
  };

  const refreshCommitsHandler = () => {
    dispatch(listCommits(user.login, commitList.repoName, commitList.branch));
  }

  return (
    <main>
      {loading && !commitList.repoName ? (
        <Loader animation="border" variant="primary" />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <>
          <Row className="d-flex align-items-center my-3">
            <Col className="d-flex my-2" md={7} xs={12}>
              <h5 className="m-0">Exploring now :</h5>

              <p className="my-0 ml-3">
                <span>{commitList.repoOwnerNickname || "unknown"}</span> |{" "}
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
            <Col
              className="d-flex align-items-center justify-content-end my-2"
              md={5} xs={12}
            >
              <span className="mr-2">
                {commitList.repoOwnerNickname || "unknown"}'s repos:{" "}
              </span>

              <DropdownButton title={commitList.repoName}>
                {commitList.repos.map((item) => (
                  <Dropdown.Item
                    onClick={repoChangeHandler.bind(null, item.name)}
                  >
                    {item.name} -{" "}
                    <span className="font-weight-lighter">{item.language}</span>
                  </Dropdown.Item>
                ))}
              </DropdownButton>
            </Col>
          </Row>
          <Row className="mb-3 ml-2">
            <DropdownButton
              title={<i className="fas fa-code-branch">{commitList.branch}</i>}
              variant="secondary"
            >
              {commitList.branches.map((item) => {
                return commitList.branches.length === 0 ? (
                  "No branches found"
                ) : (
                  <Dropdown.Item onClick={branchChangeHandler.bind(null, item)}>
                    {item}
                  </Dropdown.Item>
                );
              })}
            </DropdownButton>
            <Badge
              className="p-2 d-flex justify-content-center align-items-center mx-3"
              pill
              variant="success"
              style={{width: "5rem", fontSize: ".9rem", cursor: "pointer"}}
              onClick={refreshCommitsHandler}
            >
              <i className="fas fa-sync">Refresh</i>
            </Badge>
          </Row>
        </>
      )}
      {loading ? (
        <Loader animation="border" variant="primary" />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        Object.entries(buildCommitListGroupedByDate(commitList.commitList)).map(
          ([date, commits]) => {
            return (
              <>
                <p className="text-body">Commits on {date}</p>
                <Table striped bordered hover responsive className="table-sm">
                  <tbody>
                    {commits.map((commit) => (
                      <tr key={commit.commitDate}>
                        <td className="flex-column p-2 w-75">
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
                            <span className="text-primary ml-2">
                              committed at {extractTime(commit.commitDate)}
                            </span>
                          </div>
                        </td>

                        <td className="align-middle">
                          <a
                            className="text-decoration-none"
                            href={commit.commitHtmlUrl}
                          >
                            <Button
                              variant="outline-primary"
                              className="btn-sm d-block m-auto"
                            >
                              See details in github
                            </Button>
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </>
            );
          }
        )
      )}
    </main>
  );
};

export default Commits;
