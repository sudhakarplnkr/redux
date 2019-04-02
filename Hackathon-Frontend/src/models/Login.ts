export interface IAssociateLoginProps {
  associateId?: number;
  onAssociateLogin(): void;
  onChange(event: React.ChangeEvent<HTMLInputElement>): void;
}

export interface ILoginModel {
  username?: string;
  password?: string;
}
export interface ILoginProps {
  loginModel: ILoginModel;
  onLogin(): void;
  onChange(loginModel?: ILoginModel): void;
}

export interface ILoginState {
  associateId?: number;
  isAuthenticated: boolean;
  loginModel: ILoginModel;
}

export interface ILoginContainerProps {
  loginModel: ILoginModel;
  onLogin(loginModel: ILoginModel): void;
  onLoginModelChange(loginModel: ILoginModel): void;
  isAuthenticated: boolean;
}

export interface IAssociateLoginContainerProps {
  associateId?: number;
  onAssociateLogin(associateId?: number): void;
  onAssociateIdChange(associateId?: number): void;
  isAuthenticated: boolean;
  role: RoleTypes;
}

export enum RoleTypes {
  Pmo = 'Pmo',
  EventPoc = 'EventPoc',
  Admin = 'Admin',
  Associate = 'Associate',
  Anonymous = 'Anonymous'
}
