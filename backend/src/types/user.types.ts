export interface newUser {
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  passwordHash: string;
}

export type DecodedToken = {
  username: string;
  id: number;
  iat: number;
};
