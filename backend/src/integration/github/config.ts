import OperationConfig from "../../interfaces/OperationConfig";
import basic = require('basic-authorization-header');

export const getCommitListConfig = (
  ownerNickname: string,
  repoName: string, 
  branch: string
): OperationConfig => {
  return {
    method: 'GET',
    url: `https://api.github.com/repos/${ownerNickname}/${repoName}/commits`,
    headers: {
      Authorization: basic(process.env.CLIENT_ID, process.env.CLIENT_SECRET),
      "Content-Type": "application/x-www-form-urlencoded"
    },
    params: { sha: branch }
  };
};

export const getBranchesConfig = (
  owner: string,
  reponame: string,
): OperationConfig => {
  return {
    method: 'GET',
    url: `https://api.github.com/repos/${owner}/${reponame}/branches`,
    headers: {
      Authorization: basic(process.env.CLIENT_ID, process.env.CLIENT_SECRET),
      "Content-Type": "application/x-www-form-urlencoded"
    }
  };
};


export const getReposConfig = (
  owner: string
): OperationConfig => {
  return {
    method: 'GET',
    url: `https://api.github.com/users/${owner}/repos`,
    headers: {
      Authorization: basic(process.env.CLIENT_ID, process.env.CLIENT_SECRET),
      "Content-Type": "application/x-www-form-urlencoded"
    }
  };
};
