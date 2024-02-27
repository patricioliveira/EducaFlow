import { Routes } from '@angular/router';
import { CursosComponent } from './components/cursos/cursos.component';
import { AlunosComponent } from './components/alunos/alunos.component';

export const routes: Routes = [
    { path: 'cursos', component: CursosComponent },
    { path: 'alunos', component: AlunosComponent },
];
