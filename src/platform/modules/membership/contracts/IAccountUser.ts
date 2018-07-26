export interface IAccountUser {
    applicationId: string,
    roles: string[],
    userId: string,
    isActive: boolean,
    impersonateUserId: string
}