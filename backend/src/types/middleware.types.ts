import { Request } from "express";
import { JwtPayload } from "jsonwebtoken";

type Token = {
  token?: string;
  decodedToken?: string | JwtPayload;
};

export type RequestToken = Request & Token;
