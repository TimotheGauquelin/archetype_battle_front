export interface TokenPayload {
  id: string;
  email: string;
  username: string;
  roles: string[];
  iat?: number;
  exp?: number;
}
