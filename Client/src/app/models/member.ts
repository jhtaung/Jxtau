import { Photo } from './photo';

export interface Member {
  id: number;
  username: string;
  photoUrl: string;
  dateOfBirth: string;
  age: number;
  knownAs: string;
  created: Date;
  lastActive: Date;
  introduction: string;
  photos: Photo[];
}
