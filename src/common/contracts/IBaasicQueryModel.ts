export interface IBaasicQueryModel<T> {
    embed: string,
    item: T[],
    page: number,
    recordsPerPage: number,
    searchQuery: string,
    sort: string,
    totalRecords: number
}