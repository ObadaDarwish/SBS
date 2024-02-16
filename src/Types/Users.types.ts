import { BaseObject } from "./global.types";

export interface IUsers extends BaseObject {
  username: string;
  name: string;
  email: string;
  phone: string;
  website: string;
  company: {
    name: string;
  };
}

export interface IUserAlbum extends BaseObject {
  userId: number;
  title: string;
}
