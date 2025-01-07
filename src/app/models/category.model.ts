export enum AccessType {
  PUBLIC = 'public',
  PRIVATE = 'private'
}

export interface Category {
  id: number;
  name: string;
  image: string;
  acces?: AccessType
}
