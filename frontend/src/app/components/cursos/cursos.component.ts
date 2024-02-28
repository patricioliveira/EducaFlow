// cursos.component.ts
import { Component, OnInit, inject } from '@angular/core';
import { ApiConsumerService } from '../../services/api-consumer.service';
import { Curso } from '../../models/Curso';
import { ResponseApi } from '../../models/ResponseApi';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {
  public cursos: ResponseApi<Curso> | ResponseApi<Curso>[] = [];
  private _apiConsumer = inject(ApiConsumerService)

  constructor() { }

  ngOnInit() {
    this._apiConsumer.getAllCursos().subscribe(data => {
      this.cursos = data;
    });
  }
}
