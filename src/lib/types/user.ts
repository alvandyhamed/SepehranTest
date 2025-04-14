// This is the base type from the API.
// You can extend this type if you need to add more fields (e.g., color, isSelected, etc.)

export type UserItem = {
  firstName: string;
  lastName: string;
  age: number;
  gender: 'male' | 'female';
  email: string;
  username: string;
  height: number;
};
