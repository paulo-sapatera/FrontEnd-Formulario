import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioComponent } from './formulario/formulario.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TodosCasdatrosComponent } from './todos-casdatros/todos-casdatros.component';
import { AtualizarCadastroComponent } from './atualizar-cadastro/atualizar-cadastro.component';

import { LOCALE_ID, NgModule } from '@angular/core';
import localePT from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localePT);

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    TodosCasdatrosComponent,
    AtualizarCadastroComponent
  ],
  imports: [
    BrowserModule,
    MatSnackBarModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt-br' },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
