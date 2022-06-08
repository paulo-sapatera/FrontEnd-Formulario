import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { map, Observable, take, BehaviorSubject } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Cadastro } from 'src/models/cadastro.model';

@Injectable({
  providedIn: 'root'
})
export class FormularioService {
  private baseUrl = 'https://localhost:5001/cadastro';

  private _refresh$ = new BehaviorSubject<boolean>(true);

  constructor(private snackBar: MatSnackBar, private http: HttpClient) {}

  mostrarMessagem(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: isError ? ['msg-error'] : ['msg-success'],
    });
  }

  get refresh$() {
    return this._refresh$;
  }
  
  todosCadastros(): Observable<Cadastro[]> {
    return this.http.get<Cadastro[]>(`${this.baseUrl}/listarCadastros`).pipe(
      map((actions) => actions.sort((x, y) => this.ordenarPorId(x, y))),
      take(1)
    );
  }

  pegarPorId(id: string): Observable<Cadastro> {
    return this.http.get<Cadastro>(`${this.baseUrl}/listarPorId/${id}`).pipe(take(1));
  }

  cadastrar(novoCadastro: Cadastro): Observable<Cadastro> {
    return this.http.post<Cadastro>(`${this.baseUrl}/cadastrar`,novoCadastro).pipe(take(1));
  }

  atualizarCadastro(cadastro: Cadastro): Observable<Cadastro> {
    const url = `${this.baseUrl}/AtualizarCadastro/${cadastro.id}`;
    return this.http.put<Cadastro>(url, cadastro).pipe(take(1));
  }

  deletaCadastro(id: number): Observable<Cadastro> {
    const url = `${this.baseUrl}/deletarCadastro/${id}`;
    return this.http.delete<Cadastro>(url).pipe(take(1));
  }

  private ordenarPorId(x: Cadastro, y: Cadastro) {
    if (x.id! < y.id!) return 1;
    if (x.id! > y.id!) return -1;
    return 0;
  }

}
