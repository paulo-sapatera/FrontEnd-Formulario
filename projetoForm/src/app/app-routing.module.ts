import { AtualizarCadastroComponent } from './atualizar-cadastro/atualizar-cadastro.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioComponent } from './formulario/formulario.component';
import { TodosCasdatrosComponent } from './todos-casdatros/todos-casdatros.component';

const routes: Routes = [
  {path: '', redirectTo: 'formulario', pathMatch: 'full'},
  {path: 'formulario', component: FormularioComponent},
  {path: 'cadastros', component: TodosCasdatrosComponent},
  {path:'update/:id', component: AtualizarCadastroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
