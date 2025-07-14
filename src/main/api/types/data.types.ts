export interface IGeneratedToken {
  token: string;
  status: string;
  [key: string]: string;
}

export interface IUserDetails {
  userId: string;
  username: string;
  books: IBookDetails[];
}

export interface IBookDetails {
  isbn: string;
  title: string;
  subTitle: string;
  author: string;
  publish_date: string;
  publisher: string;
  pages: number;
  description: string;
  website: string;
}
