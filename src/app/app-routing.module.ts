import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaPersonajesComponent } from './components/lista-personajes/lista-personajes.component';
import { VistaPersonajeComponent } from './components/vista-personaje/vista-personaje.component';

const routes: Routes = [
  {path:'' ,pathMatch:'full', redirectTo:'/listapersonajes'},
  {path:'listapersonajes', component: ListaPersonajesComponent},
  {path:'listapersonajes/:page', component: ListaPersonajesComponent},
  {path:'vista/:idpersonaje', component: VistaPersonajeComponent},
  {path:'**', redirectTo:'/listapersonajes' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
