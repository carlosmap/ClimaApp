import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormularioRegistroComponent } from './formulario-registro/formulario-registro.component';
import { Route, RouterModule } from '@angular/router';
import { HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { PrincipalComponent } from './principal/principal.component';
const routes: Route [] = [
  {path: '', component:HomeComponent },
  {path: 'home', component:HomeComponent },
  {path: 'formularioRegistro', component:FormularioRegistroComponent },
  {path: 'principal', component:PrincipalComponent }

]
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FormularioRegistroComponent,
    PrincipalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
