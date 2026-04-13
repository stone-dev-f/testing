export interface User {
  name: string;
  isActive: boolean;
}

export default function filterActiveUsers(users: User[]): User["name"][] {
  return (
    users?.filter?.((user) => user.isActive)?.map((user) => user.name) ?? []
  );
}
