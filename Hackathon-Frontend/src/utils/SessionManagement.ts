import { RoleTypes } from '../models/Login';

interface IUserToken {
    associateId?: string;
    isAuthenticated?: boolean;
    role: RoleTypes;
    token: string;
    claim?: any;
}
class SessionManagement {
    private readonly tokenKey = 'UserToken';

    public GetToken(): IUserToken | null {
        const token = sessionStorage.getItem(this.tokenKey);
        return this.nullChecker(token);
    }

    public GetAccessToken(): string {
        const userClaim = this.nullChecker(sessionStorage.getItem(this.tokenKey));
        return userClaim ? userClaim.token : '';
    }

    public GetAssociateId(): string | undefined {
        const userClaim = this.nullChecker(sessionStorage.getItem(this.tokenKey));
        return userClaim ? userClaim.associateId : '';
    }

    public currentUser(): IUserToken {
        const userClaim = this.nullChecker(sessionStorage.getItem(this.tokenKey));
        return userClaim || ({ } as IUserToken);
    }

    public SetToken(token: IUserToken): void {
        sessionStorage.setItem(this.tokenKey, JSON.stringify(token));
    }

    public RemoveToken(): void {
        sessionStorage.removeItem(this.tokenKey);
    }

    private nullChecker(token: string | null): IUserToken | null {
        if (token) {
            return JSON.parse(token) as IUserToken;
        }
        return null;
    }
}

export default new SessionManagement();
