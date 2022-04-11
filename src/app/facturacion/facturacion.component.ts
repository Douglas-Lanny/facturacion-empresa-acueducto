import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ResidentialAreaService } from '../residential-area.service';

@Component({
  selector: 'app-facturacion',
  templateUrl: './facturacion.component.html',
  styleUrls: ['./facturacion.component.css']
})
export class FacturacionComponent implements OnInit {

  UnidadesResidenciales: any = [];
  facturas: any = []; // Variable para las facturas


  constructor(
    private readonly residencialAreaService: ResidentialAreaService,
    private readonly router: Router
    ) {//Inyección de servicio que permite obtener las unidades residenciales) { }
  }
  ngOnInit(): void {

   this.getFacturas();
   console.log('aca',this.facturas);
    
  }

  // Metodo para obtener las unidades residenciales que requieren facturación
  getFacturas(){
    this.facturas =  this.residencialAreaService.requiereFactura; 
  }

  // metodo para volver a la pagina maestra.
  goBack() {
    this.router.navigateByUrl('/dashboard');
  }

  

}
