import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IUnidadResidencial, ResidentialAreaService } from '../residential-area.service';


// Validación que determina si el formulario contiene unidades residenciales que requieran facturación
const tieneFacturas: ValidatorFn = (form: AbstractControl): ValidationErrors | null => {

  const value= (form.value as any[]).map((ele) => ele.esFactura); // captura de los valores de la unidad residencial.

  return value.includes(true) ? null : { tieneFacturas: true }; // evaluacion si dentro de las unidades residenciales existe por lo menos uno que requiera facturación
}

// Componente Maestro
@Component({
  selector: 'app-dasboard-residential-area',
  templateUrl: './dasboard-residential-area.component.html',
  styleUrls: ['./dasboard-residential-area.component.css']
})
export class DasboardResidentialAreaComponent implements OnInit {



  get facturas() {
    return this.form.controls["facturas"] as FormArray;
  }

  // Modelo de formulario para el dasboard
  form: FormGroup = this.fb.group({
    precioMetroCubico: [null, [Validators.required, Validators.min(100), Validators.max(5000)]], // Control para ingresar el costo del litro de agua.
    facturas: this.fb.array([], tieneFacturas) // controles para establecer a que unidad residencial se le debe facturar y se adjunta la validación correspondiente.
  });

  unidadesResidenciales: IUnidadResidencial[];

  constructor(
    private readonly fb: FormBuilder, // Inyección del servicio que permite construir un formulario de forma dinamica
    private readonly residencialAreaService: ResidentialAreaService,//Inyección de servicio que permite obtener las unidades residenciales
    private readonly router: Router // Servicio que permite realizar la navegación.
     )  { }



  ngOnInit(): void {
    this.unidadesResidenciales = this.getUnidadesResidenciales();
    this.createFormArray();
  }

  // Metodo para obtener las unidades residenciales
  getUnidadesResidenciales(){
    return this.residencialAreaService.getUnidadesResidenciales(); 
  }

  adicionarUnidadResidencial() {
    // control que representa la decisión de facturación
    const esFactura = this.fb.group({
      esFactura: [false],
      consumoAgua: [null]
    });

    (this.form.get('facturas') as FormArray).push(esFactura);
  }

  //  Se adiciona un control (control para establ si se debe facturar) por unidad residencial
  createFormArray(){
    this.unidadesResidenciales.forEach(() => {
      this.adicionarUnidadResidencial();
    });
  }

  // Metodo para generar las facturas.
  onSubmit() {

    const costoMetroCubico = this.form.get('precioMetroCubico')?.value;

    const facturas= (this.facturas.value as any[]) // informacion colectada en el formulario

    // se mapea las unidades residenciales para incluirles información de la facturación.
    const informacionFacturacion = this.unidadesResidenciales.map(
      (ele: any, index) => {

        ele.consumoAgua = facturas[index].consumoAgua;
        ele.costoAgua = this.residencialAreaService.calculoConsumoAgua(ele.estrato, ele.zonaResidencial, costoMetroCubico, facturas[index].consumoAgua);
        ele.seFactura = facturas[index].esFactura;
        return ele;
      }
    );

    console.log(informacionFacturacion);

    this.residencialAreaService.requiereFactura = informacionFacturacion.filter(ele => ele.seFactura); // se pasa hay servicio las unidades residencialaes que requieren facturacion
    this.router.navigateByUrl('/facturacion');
  }










}
