export type ResponseApi<T> = {
    status: StatusEnum;
    message: string;
    result: T
}

export enum StatusEnum {
    OK = "OK",
    ERRO = "ERRO"
}
