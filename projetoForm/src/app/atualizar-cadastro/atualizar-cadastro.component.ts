import { Cadastro } from 'src/models/cadastro.model';
import { ActivatedRoute, Router } from '@angular/router';
import { FormularioService } from './../services/formulario.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { map, switchMap } from 'rxjs';

@Component({
  selector: 'app-atualizar-cadastro',
  templateUrl: './atualizar-cadastro.component.html',
  styleUrls: ['./atualizar-cadastro.component.scss']
})
export class AtualizarCadastroComponent implements OnInit {

  cadastroForm: FormGroup;

  constructor( private service: FormularioService,
    private router: Router,
    private id: ActivatedRoute,
    private formBuilder: FormBuilder){
    
    this.cadastroForm = this.formBuilder.group({
      id: [''],
      nome : ['', [Validators.required, Validators.minLength(4)]],
      sobrenome:['', [Validators.required, Validators.minLength(4)]],
      email:['', [Validators.required, Validators.email]],
      data: ['', [Validators.required]],
      endereco: ['', [Validators.required, Validators.minLength(10)]],
      cep: ['', [Validators.required, Validators.pattern("^[0-9]{8}")]],
      telefone: ['', [Validators.required, Validators.pattern("^[0-9]{11}")]],
      sexo:['', [Validators.required]],
      ensino:['', [Validators.required]],
      curso:['', [Validators.required]]
    });
   }

   ngOnInit(): void {
    this.id.params
    .pipe(
      map((params: any) => params['id']),
      switchMap((id) => this.service.pegarPorId(id))
    )
    .subscribe((cadastro) => this.atualizarCadastro(cadastro));
  }

  private atualizarCadastro(usuario: Cadastro): void {
    this.cadastroForm.patchValue({
      id: usuario.id,
      nome: usuario.nome,
      sobrenome: usuario.sobrenome,
      email: usuario.email,
      data: usuario.data,
      endereco: usuario.endereco,
      cep: usuario.cep,
      telefone: usuario.telefone,
      sexo: usuario.sexo,
      ensino: usuario.ensino,
      curso: usuario.curso, 
    });
  }

  submeterCadastro() {
      this.service.atualizarCadastro(this.cadastroForm.value).subscribe(() => {
        this.cancel();
        this.service.mostrarMessagem('Cadastro atualizado');
      });
  }

  cancel(): void {
    this.router.navigate(['cadastros']);
  }

  get nome() 
  {
    return this.cadastroForm.get('nome')!;
  }

  
  get sobrenome() 
  {
    return this.cadastroForm.get('sobrenome')!;
  }

  
  get email() 
  {
    return this.cadastroForm.get('email')!;
  }


  get endereco() 
  {
    return this.cadastroForm.get('endereco')!;
  }

  
  get data() 
  {
    return this.cadastroForm.get('data')!;
  }

  
  get cep() 
  {
    return this.cadastroForm.get('cep')!;
  }

  
  get telefone() 
  {
    return this.cadastroForm.get('telefone')!;
  }

  
  get sexo() 
  {
    return this.cadastroForm.get('sexo')!;
  }

  
  get ensino() 
  {
    return this.cadastroForm.get('ensino')!;
  }

  
  get curso() 
  {
    return this.cadastroForm.get('curso')!;
  }

  

}
