import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Aluno } from '../models/Aluno';
import { Curso } from '../models/Curso';
import { ResponseApi } from '../models/ResponseApi';
import { environment } from '../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ApiConsumerService {
  private _urlBase: string = environment.baseUrl;
  private _controller: string = "";

  constructor(private _http: HttpClient) { }

  getAllCursos(): Observable<ResponseApi<Curso[]>> {
    this._controller = "cursos"
    return this._http.get<ResponseApi<Curso[]>>(`${this._urlBase}/${this._controller}/`);
  }

  getAllAlunos(): Observable<ResponseApi<Aluno[]>> {
    this._controller = "alunos"
    return this._http.get<ResponseApi<Aluno[]>>(`${this._urlBase}/${this._controller}/`);
  }

  getAlunoById(id: string) {
    this._controller = "alunos"
    return this._http.get<ResponseApi<Aluno>>(`${this._urlBase}/${this._controller}/${id}`);
  }

  getCursoById(id: string) {
    this._controller = "cursos"
    return this._http.get<ResponseApi<Aluno>>(`${this._urlBase}/${this._controller}/${id}`);
  }

  createAluno(aluno: Aluno): Observable<ResponseApi<Aluno>> {
    this._controller = "alunos";
    return this._http.post<ResponseApi<Aluno>>(`${this._urlBase}/${this._controller}/`, aluno);
  }

  updateAluno(aluno: Aluno): Observable<ResponseApi<Aluno>> {
    if (!aluno.id) {
      throw new Error('ID do aluno não fornecido para a atualização.');
    }
    this._controller = "alunos";
    return this._http.put<ResponseApi<Aluno>>(`${this._urlBase}/${this._controller}/${aluno.id}/`, aluno);
  }

  deleteAluno(id: number): Observable<void> {
    this._controller = "alunos";
    return this._http.delete<void>(`${this._urlBase}/${this._controller}/${id}/`);
  }

  createCurso(curso: Curso): Observable<ResponseApi<Curso>> {
    this._controller = "cursos";
    return this._http.post<ResponseApi<Curso>>(`${this._urlBase}/${this._controller}/`, curso);
  }

  updateCurso(curso: Curso): Observable<ResponseApi<Curso>> {
    if (!curso.id) {
      throw new Error('ID do curso não fornecido para a atualização.');
    }
    this._controller = "cursos";
    return this._http.put<ResponseApi<Curso>>(`${this._urlBase}/${this._controller}/${curso.id}/`, curso);
  }

  deleteCurso(id: number): Observable<void> {
    this._controller = "cursos";
    return this._http.delete<void>(`${this._urlBase}/${this._controller}/${id}/`);
  }
}

