import { Curso } from "./Curso";

export class Aluno {
    id?: number;
    ativo?: boolean;
    nome?: string;
    cpf?: number;
    data_nascimento?: Date;
    genero?: string;
    email?: string;
    cursos?: Curso;
}