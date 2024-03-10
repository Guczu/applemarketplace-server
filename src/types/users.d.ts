interface User {
    id: number;
    name: string;
    surname: string;
    email: string;
    city: string;
    phone_number: number;
    rating: number;
    nickname: string;
    hashed_password: string;
  }

interface UserData {
    id: number;
    nickname?: string;
    email: string;
    password: string;
}
  
  export { User, UserData }