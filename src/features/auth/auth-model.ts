import { Employee, RegisteredUser } from "@prisma/client";

export type LoginRequest = {
  email: string;
  password: string;
};

export type LoginEmployeeRequest = {
  uniqueId: string;
  password: string;
};

export type LoginResponse = {
  token: string;
};

export type RegisterRequest = {
  full_name: string;
  email: string;
  phone_number: string;
  company_name: string;
  industry?: string;
  password: string;
};

export type RegisteredUserWithoutPassword = Omit<RegisteredUser, "password">;

export type CurrentLoggedInUserResponse = {
  email: string;
  user_id: string;
  full_name: string;
  phone_number: string;
  package_type: string;
  company: {
    name: string;
    industry: string | null;
  } | null;
};

export type CurrentEmployeeLoggedInUserResponse = Employee & {
  job_position: {
    job_position_id: number;
    company_branch_id: number;
    name: string;
  };
  employment_status: {
    employment_status_id: number;
    company_branch_id: number;
    name: string;
  };
};
