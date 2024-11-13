export interface UseLoginUserHookResponse {
  isLoading: boolean;
  visibility: boolean;
  email: string;
  login: () => Promise<void>;
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
  changeVisibility: () => void;
}
