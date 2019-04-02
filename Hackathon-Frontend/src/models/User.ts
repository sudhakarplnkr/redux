export interface IUser {
  _id?: string;
  Username?: string;
  Password?: string;
  Email?: string;
  AssociateId?: number;
  FirstName?: string;
  LastName?: string;
  Phone?: number;
  Role?: string;
}

export interface IConfigurationModel {
  users?: IUser[];
  user?: IUser;
  isEdit?: boolean;
  isDelete?: boolean;
  isAdd?: boolean;
}

export interface IConfigurationContainerProps {
  loadUsers: () => void;
  saveUser: (user?: IUser) => void;
  deleteUser: (user: IUser) => void;
  clearUser: () => void;
  updateConfigurationModel: (configurationModel: IConfigurationModel) => void;
  configurationModel: IConfigurationModel;
}

export interface IConfigurationComponentProps {
  configurationModel: IConfigurationModel;  
  deleteUser: (user: IUser) => void;
  clearUser: () => void;
  saveUser: () => void;
  setUser: (user: IUser) => void;
  updateConfigurationModel: (configurationModel: IConfigurationModel) => void;
}
