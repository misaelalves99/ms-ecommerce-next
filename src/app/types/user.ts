// app/types/user.ts

export interface User {
  id: string;
  name: string;
  email: string;
  password?: string;
  role?: string;
  createdAt?: string;
  updatedAt?: string;
  avatarUrl?: string;
}
