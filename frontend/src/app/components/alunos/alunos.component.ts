// alunos.component.ts
import { Component, OnInit, inject } from '@angular/core';
import { ResponseApi } from '../../models/ResponseApi';
import { Curso } from '../../models/Curso';
import { ApiConsumerService } from '../../services/api-consumer.service';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.scss']
})
export class AlunosComponent implements OnInit {
  alunos: ResponseApi<Curso> | ResponseApi<Curso>[] = [];
  private _apiConsumer = inject(ApiConsumerService)

  constructor() { }

  ngOnInit() {
    this._apiConsumer.getAllAlunos().subscribe(data => {
      this.alunos = data;
    });
  }
}
