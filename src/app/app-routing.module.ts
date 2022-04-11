// Modulo para controlar la navegacion de la aplicación

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DasboardResidentialAreaComponent } from './dasboard-residential-area/dasboard-residential-area.component'
import { FacturacionComponent } from './facturacion/facturacion.component';


// Definición de las rutas de la aplicación
const routes: Routes = [

  { path: 'dashboard', component: DasboardResidentialAreaComponent },
  {path: 'facturacion', component: FacturacionComponent},
  { path: '',   redirectTo: '/dashboard', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
