interface Users {
  id: string;
  name: string;
  email: string;
  number: string;
  createdAt: Date;
}

export interface User {
  user: Users[];
}