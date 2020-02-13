import { User } from "./user.model";
import { Injectable } from "@angular/core";

@Injectable()
export class UserService {
  private user: User[] = [
    {
      username: "admin@123",
      password: "admin123"
    },
    {
      username: "admin@124",
      password: "mlemmlem"
    }
  ];
}
