import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormularioService } from '../services/formulario.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

  cadastroForm: FormGroup;

  constructor(private service: FormularioService, private formBuilder: FormBuilder,  private router: Router){
    this.cadastroForm = this.formBuilder.group({
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


  submeterCadastro() {
      this.service.cadastrar(this.cadastroForm.value).subscribe(() => {
       this.router.navigate(['cadastros']);
       this.service.mostrarMessagem('Cadastro Criado');
        
      });
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

  ngOnInit(): void {
   
  }

}
