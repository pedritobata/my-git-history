import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Table, Button, Row, Col , Image} from 'react-bootstrap'
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
      <h4 className="my-3">
        Welcome{" "}
        <span className="font-weight-light">
          {commitList.repoOwnerNickname}
        </span>
      </h4>
      <Table striped bordered hover responsive className='table-sm'>
           <tbody>
              {commitList.commitList.map((commit) => (
                <tr key={commit.commitDate}>
                  <td className="d-flex flex-direction-column"><span>{commit.commitMessage}</span> 
                  <Image className="rounded-circle w-25" fluid src={commit.committerAvatarUrl} alt={commit.committerName}/>
                  <span>{commit.committerNickname}</span>
                  </td>
             
                  <td>
                  
                      <Button variant='primary' className='btn-sm'>
                        See details
                      </Button>
              
                   
                  </td>
                </tr> 
              ))}
            </tbody>
          </Table>
    </main>
  );
};

export default Commits;
