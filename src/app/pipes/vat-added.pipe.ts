import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'vatAdded'
})
export class VatAddedPipe implements PipeTransform {

  transform(value: number, rate:number): number { // ilk value değiştirmek istediği değer ikinci value ilk değerimiz
        
    return value+(value*rate/100);
  }

}
