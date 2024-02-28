import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiConsumerService } from '../../services/api-consumer.service';
import { Curso } from '../../models/Curso';
import { ResponseApi } from '../../models/ResponseApi';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss'],
  standalone: true,
  imports: [
    NgIf,
    NgFor
  ]
})
export class CursosComponent implements OnInit {
  cursos: Curso[] = [];
  cursoSelecionado: Curso | null = null;
  showForm = false;
  novoCurso: Curso = {};

  cursoForm = this.formBuilder.group({
    nome_curso: ['', Validators.required],
    nome_professor: ['', Validators.required],
    descricao: ['', Validators.required],
  });

  constructor(private apiConsumer: ApiConsumerService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.loadCursos();
  }

  loadCursos() {
    this.apiConsumer.getAllCursos().subscribe(data => {
      this.cursos = data.results;
    });
  }

  onCursoSelected(curso: Curso) {
    this.cursoSelecionado = { ...curso };
    this.showForm = true;
  }

  toggleForm() {
    this.showForm = !this.showForm;
    this.cursoSelecionado = null;
    this.novoCurso = {};
    if (this.cursoForm) {
      this.cursoForm.clearValidators();
    }
  }

  submitForm() {
    if (this.cursoSelecionado) {
      this.apiConsumer.updateCurso(this.cursoSelecionado).subscribe(() => {
        this.loadCursos();
        this.toggleForm();
      });
    } else {
      this.apiConsumer.createCurso(this.novoCurso).subscribe(() => {
        this.loadCursos();
        this.toggleForm();
      });
    }
  }

  deletarCurso(id: number | undefined) {
    this.apiConsumer.deleteCurso(id!).subscribe(() => {
      this.loadCursos();
    });
  }
}
