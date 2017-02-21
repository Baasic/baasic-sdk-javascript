export type TokenType = "access" | "refresh";

export interface IToken
{
    expireTime?: Date
    token: string,
    type: TokenType
}