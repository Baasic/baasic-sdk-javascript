export const TokenTypes = {
    Access: 'access',
    Refresh: 'refresh'
};

export type TokenType = "access" | "refresh";

export interface IToken {
    expireTime?: number,
    expires_in?: number,
    sliding_window?: number,
    token: string,
    type: TokenType
}