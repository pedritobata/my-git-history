import OperationConfig from "../../interfaces/operationConfig";

export const getCommitListConfig = (
  ownerNickname: string,
  repoName: string
): OperationConfig => {
  return {
    endpointUrl: `https://api.github.com/repos/${ownerNickname}/${repoName}/commits`,
  };
};
