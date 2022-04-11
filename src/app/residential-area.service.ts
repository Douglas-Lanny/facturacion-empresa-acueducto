import { Injectable } from '@angular/core';

// Estructura de las unidades residenciales
export interface IUnidadResidencial {
  id: string
  nombre: string,
  estrato: string,
  zonaResidencial: string
}

// Base de datos de las zonas residenciales.
export const UNIDADES_RESIDENCIALES: IUnidadResidencial[] = [
  { id: '1', nombre: 'Pajarito', estrato: '1', zonaResidencial: 'rural' },
  { id: '2', nombre: 'Poblado', estrato: '6', zonaResidencial: 'urbana' },
];


// Información de los estratos
export const ESTRATOS = [
  { estrato: '1', tarifa: 1, subsidio: 0.25 },
  { estrato: '2', tarifa: 1, subsidio: 0.125 },
  { estrato: '3', tarifa: 1, subsidio: 0 },
  { estrato: '4', tarifa: 1.15, subsidio: 0 },
  { estrato: '5', tarifa: 1.30, subsidio: 0 },
  { estrato: '6', tarifa: 1.45, subsidio: 0 }
];

export const ZONAS = [
  { id: 'rural',  valorBase: 0.78 },
  { id: 'urbana', valorBase: 1 }
];

@Injectable({
  providedIn: 'root'
})
export class ResidentialAreaService {

  requiereFactura: any[] = [] // array que establece si la unidad residencial requiere factura.

  constructor() { }


  getUnidadesResidenciales() {
    return UNIDADES_RESIDENCIALES;
  }

  // Calculo costo por consumo de agua.
  calculoConsumoAgua( idEStrato: string, idZonaResidencial: string, costoMetroCubico: number, consumo: number): number {
    // Precio base
    let costoBase = consumo * costoMetroCubico;

    // Se obtiene el estrato
    let estrato = this.getEstrato(idEStrato)
    // costo considerando la tarifa del estrato
    let costoConTarifa = costoBase * estrato.tarifa;
    // costo considerando descuentos por subsidio
    let costoSubsidio = costoConTarifa*(1-estrato.subsidio);
    // se obtiene datos de la zona residencial
    let zona = this.getZonaResidencial(idZonaResidencial);
    // costo considerando la zona
 

    return costoSubsidio*zona.valorBase;// costo considerando la zona.
  }

  // Función para obtener el estrato a partir de su id
  getEstrato(idEStrato: string): any{
    return ESTRATOS.find(ele => ele.estrato === idEStrato);
  }

  // Función para obtener la zona residencial a partir de su id
  getZonaResidencial(idZonaResidencial: string): any {
    return ZONAS.find(ele => ele.id === idZonaResidencial);
  }

  

  

}
