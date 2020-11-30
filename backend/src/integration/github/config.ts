import OperationConfig from "../../interfaces/operationConfig";

export const getCommitListConfig = (
  ownerNickname: string,
  repoName: string
): OperationConfig => {
  return {
    endpointUrl: `https://api.github.com/repos/${ownerNickname}/${repoName}/commits`,
  };
};

export const getBranchesConfig = (
  owner: string,
  reponame: string
): OperationConfig => {
  return {
    endpointUrl: `https://api.github.com/repos/${owner}/${reponame}/branches`,
  };
};
