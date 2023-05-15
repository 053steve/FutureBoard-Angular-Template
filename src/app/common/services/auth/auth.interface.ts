
export interface LoginDto {
  username: string;
  password: string;
}

export interface AuthState {
  authToken: string | null;
}