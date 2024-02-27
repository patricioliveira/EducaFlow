import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { Curso } from '../models/Curso';
import { ResponseApi } from '../models/ResponseApi';
import { environment } from '../environments/environment.development';
import { Aluno } from '../models/Aluno';

@Injectable({
  providedIn: 'root'
})
export class ApiConsumerService {
  private _urlBase: string = environment.baseUrl;
  private _controller: string = "";

  constructor(private _http: HttpClient) { }

  getAllCursos(): Observable<ResponseApi<Curso>> {
    this._controller = "cursos"
    return this._http.get<ResponseApi<Curso>>(`${this._urlBase}/${this._controller}/`);
  }

  getAllAlunos(): Observable<ResponseApi<Aluno>> {
    this._controller = "alunos"
    return this._http.get<ResponseApi<Aluno>>(`${this._urlBase}/${this._controller}/`);
  }

  getAlunoById(id: string, controller: string){
    this._controller = controller
    return this._http.get<ResponseApi<Aluno>>(`${this._urlBase}/${this._controller}/${id}`);
  }

  getCursoById(id: string, controller: string) {
    this._controller = controller
    return this._http.get<ResponseApi<Aluno>>(`${this._urlBase}/${this._controller}/${id}`);
  }


}

