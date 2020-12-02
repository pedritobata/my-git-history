import { Request, Response } from "express";
import { Container } from "typedi";
import GitUserServiceImpl from "../services/implementation/gitUserServiceImpl";
import UserResponse from '../api/response/interfaces/userResponse';

export const getUserController = async (req: Request, res: Response) => {
  const nickname = req.params.nickname;
  const gitUserService = Container.get(GitUserServiceImpl);
  const response: UserResponse = await gitUserService.getUserByNickname(nickname);
  res.status(200).json(response);
};
