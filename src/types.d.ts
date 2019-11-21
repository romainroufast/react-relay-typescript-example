export interface IJSResource {
    load(): Promise,
    get(): any,
    read(): any
}