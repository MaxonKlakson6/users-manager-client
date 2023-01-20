import { User } from "src/pages/UserTable/types/user";

export const normalizeCreatedAtField = (users: User[]): User[] => {
  return users.map((user) => {
    const createdAt = new Date(user.createdAt).toLocaleDateString();
    let lastLogin = "no login yet";

    if (user.lastLogin) {
      lastLogin = new Date(user.lastLogin).toLocaleString();
    }

    return {
      ...user,
      lastLogin,
      createdAt,
    };
  });
};
