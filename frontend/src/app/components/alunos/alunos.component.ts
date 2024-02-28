import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiConsumerService } from '../../services/api-consumer.service';
import { Aluno } from '../../models/Aluno';
import { ResponseApi } from '../../models/ResponseApi';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.scss'],
  standalone: true,
  imports: [
    NgIf,
    NgFor
  ]

})
export class AlunosComponent implements OnInit {
  alunos: Aluno[] = [];
  alunoSelecionado: Aluno | null = null;
  showForm = false;
  novoAluno: Aluno = {};

  alunoForm = this.formBuilder.group({
    nome: ['', Validators.required],
    cpf: ['', Validators.required],
    data_nascimento: ['', Validators.required],
    genero: ['', Validators.required],
    email: ['', Validators.required],
    cursos: [[]],
  });

  constructor(private apiConsumer: ApiConsumerService, private formBuilder: FormBuilder) {  }

  ngOnInit() {
    this.loadAlunos();
  }

  loadAlunos() {
    this.apiConsumer.getAllAlunos().subscribe(data => {
      this.alunos = [];
      this.alunos = data.results;
    });
  }

  onAlunoSelected(aluno: Aluno) {
    this.alunoSelecionado = { ...aluno };
    this.showForm = true;
  }

  toggleForm() {
    this.showForm = !this.showForm;
    this.alunoSelecionado = null;
    this.novoAluno = {};
    if (this.alunoForm) {
      this.alunoForm.clearValidators();
    }
  }

  submitForm() {
    if (this.alunoSelecionado) {
      this.apiConsumer.updateAluno(this.alunoSelecionado || 0).subscribe(() => {
        this.loadAlunos();
        this.toggleForm();
      });
    } else {
      this.apiConsumer.createAluno(this.novoAluno).subscribe(() => {
        this.loadAlunos();
        this.toggleForm();
      });
    }
  }

  deletarAluno(id: number | undefined) {

    this.apiConsumer.deleteAluno(id!).subscribe(() => {
      this.loadAlunos();
    });
  }
}
