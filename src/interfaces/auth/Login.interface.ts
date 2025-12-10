export interface LogProps {
  email: string;
  password: string;
}

export interface LoginResponse {
  message: string;
  success: boolean;
  data: {
    token: string;
    user: {
      id: string;
      username: string;
      email: string;
      roles: string[];
    };
  };
}
