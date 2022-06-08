import { Observable, switchMap } from 'rxjs';
import { FormularioService } from './../services/formulario.service';
import { Cadastro } from 'src/models/cadastro.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos-casdatros',
  templateUrl: './todos-casdatros.component.html',
  styleUrls: ['./todos-casdatros.component.scss']
})
export class TodosCasdatrosComponent implements OnInit {

  cadastros$!: Observable<Cadastro[]>;

  constructor(private service: FormularioService) {}

  ngOnInit(): void {
    this.cadastros$ = this.service.refresh$.pipe(
      switchMap(() => this.service.todosCadastros())
    );
  }

  deleteCadastro(cadastro: Cadastro): void {
    const deleteTask = window.confirm(`Deletar aluno de nome (${cadastro.nome})`);

    if (!deleteTask) {
      return;
    }

    this.service.deletaCadastro(cadastro.id!).subscribe(() => {
      this.service.mostrarMessagem('Cadastro Deletado');
      this.service.refresh$.next(true);
    });
  }

}
