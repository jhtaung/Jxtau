import { Photo } from './photo';

export interface Member {
  id: number;
  username: string;
  created: Date;
  lastActive: Date;
  photoUrl: string;
  dateOfBirth: string;
  age: number;
  knownAs: string;
  introduction: string;
  photos: Photo[];
}
