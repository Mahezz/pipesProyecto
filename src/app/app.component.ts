import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre:string = "Capitan America"

  personajes:string[] = ["Ironman","Spiderman","Thor","Loki","Groot"]
  PI: number = Math.PI
  porcentaje:number = 0.234
  salario:number = 1234.5
  fecha: Date = new Date
  nombre2:string = "AnGeL ToRReS MalDoNADO"
  valorPromesa = new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve('Los datos llegaron correctamente')
    }, 2500);
  })

  heroe = {
    nombre: 'Logan',
    clave: 'Wolverine',
    direccion: {
      calle: 'Primera',
      casa:20
    }
  }
}
