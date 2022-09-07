export interface IUser {
  surname: string;
  name: string;
  patronymic: string;
  login: string;
  email: string;
  photo: string;
  jobTitle: string;
  departament: string;
  phoneNumber: string;
  role: "admin" | "user" | "guest";
}

export interface IPerfomanceIndicatorData {
  days: string[];
  data: {
    title: string;
    color: string;
    params: number[];
  }[];
}

export interface IPerson {
  id: number;
  surname: string;
  name: string;
  patronymic: string;
  login: string;
  email: string;
  photo: string;
  jobTitle: string;
  departament: string;
  phoneNumber: string;
  role: "admin" | "user" | "guest";
}

export interface INews {
  id: number;
  coverImageUrl: string;
  title: string;
  date: Date;
  description: string;
  content: string;
  typeOfNews: "news" | "main" | "hidden";
}
