import { BaseObject } from "./global.types";

export interface IAlbum extends BaseObject {
  albumId: number;
  thumbnailUrl: string;
  title: string;
  url: string;
}
