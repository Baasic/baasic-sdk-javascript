export const TokenTypes = {
    Access: 'access',
    Refresh: 'refresh'
};

export type TokenType = "access" | "refresh";

export interface IToken {
    expireTime?: Date
    token: string,
    type: TokenType
}