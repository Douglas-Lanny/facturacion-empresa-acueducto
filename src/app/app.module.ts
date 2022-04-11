import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ControlBaseComponent } from './control-base/control-base.component';
import { DasboardResidentialAreaComponent } from './dasboard-residential-area/dasboard-residential-area.component';
import { InputMaskDirective } from './input-mask.directive';
import { FacturacionComponent } from './facturacion/facturacion.component';

@NgModule({
  declarations: [
    AppComponent,
    DasboardResidentialAreaComponent,
    ControlBaseComponent,
    InputMaskDirective,
    FacturacionComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
