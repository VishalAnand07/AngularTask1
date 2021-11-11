import {Comment } from './comment';

export interface User {
  firstName: string;
  lastName: string;
  dob: Date;
  income: number;
  isWorking: boolean;
  company: string;
  imageSrc: string;
  votes: number;
  comments : Comment[];
  Description: string
}


