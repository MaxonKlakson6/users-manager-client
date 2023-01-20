export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  isBlocked: boolean;
  lastLogin: string;
  onlineStatus: boolean;
  createdAt: string;
  updatedAt: string;
}
