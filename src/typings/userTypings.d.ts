export as namespace IUser;

export interface User {
  name: string;
  username: string;
  image: string;
}

export interface InitialUserState {
  isLoggedIn: boolean;
  user: User;
}

export interface UserDocuemnt extends User {
  active: boolean;
  createdAt: number;
  followers: number;
  followings: number;
  _id: number;
}
