
export interface ILoginModalConfig {
  sessionExpired?: boolean;
  autoLogin?: boolean;
  credentials?: null | {
    username: string,
    password: string,
  }
}

export interface ILoginPayload {
  username: string;
  password: string;
}
