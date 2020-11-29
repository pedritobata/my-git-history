import OperationConfig from "../../interfaces/OperationConfig";

export const getCommitListConfig = (
  ownerNickname: string,
  repoName: string
): OperationConfig => {
  return {
    endpointUrl: `https://api.github.com/repos/${ownerNickname}/${repoName}/commits`,
  };
};
