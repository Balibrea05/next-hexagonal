import { Dispatch, SetStateAction } from 'react';

export interface UseLoginUserHookResponse {
  isLoading: boolean;
  visibility: boolean;
  email: string;
  login: () => Promise<void>;
  setEmail: Dispatch<SetStateAction<string>>;
  setPassword: Dispatch<SetStateAction<string>>;
  changeVisibility: () => void;
  error: boolean;
}
