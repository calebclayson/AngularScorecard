import { Pipe, PipeTransform } from '@angular/core';
import { PasserService } from './passer.service';

@Pipe({
  name: 'duplicateNames'
})
export class DuplicateNamesPipe implements PipeTransform {

  constantNumber = 4;

  constructor(private pass: PasserService) {}

  transform(value: any, args?: any): any {
    let copyAry = [];
    let newName = value;
    for(let i = 0; i < this.pass.getDetails().playerNames.length; i++) {
      if(value == this.pass.getDetails().playerNames[i]) {
        copyAry.push(i);
      }
    }
    for(let i = 0; i < copyAry.length; i++) {
      for(let d = 0; d < this.constantNumber; d++) {
        newName = Math.floor(Math.random() * 100) + newName + this.constantNumber;
        this.constantNumber--;
        copyAry.pop();
      }  
    }
    return newName;
  }

}
