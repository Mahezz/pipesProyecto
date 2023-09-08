import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cifrado'
})
export class CifradoPipe implements PipeTransform {
  contrasenaCifrada:string = ""

  transform(palabra: string, cifradoActivo:boolean = false): string {
    return (cifradoActivo)?'*'.repeat(palabra.length):palabra
  }

}
