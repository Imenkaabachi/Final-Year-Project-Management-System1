import { UserRoleEnum } from "../../../Domains/user-role.enum";

export interface PayloadInterface {
  email: string;
  firstname: string;
  lastname: string;
  role: UserRoleEnum;
}
