import { Request } from "express";

type Token = {
  token: string;
};

export type RequestToken = Request & Token;
