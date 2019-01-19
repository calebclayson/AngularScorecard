import { Pipe, PipeTransform } from '@angular/core';
import { PasserService } from './passer.service';

@Pipe({
  name: 'duplicateNames'
})
export class DuplicateNamesPipe implements PipeTransform {

  constantNumber = 1;

  constructor(private pass: PasserService) {}

  transform(value: any, args?: any): any {
    let copyAry = [];
    for(let i = 0; i < this.pass.getDetails().playerNames.length; i++) {
      if(value == this.pass.getDetails().playerNames[i]) {
        copyAry.push(i);
      }
    }
    if(copyAry.length > 1) {
      let name = value;
      for(let i = 0; i < this.constantNumber; i++) {
        name = name + 'x';
      }
      this.constantNumber++;
      return name;
    } else {
      this.constantNumber++;
      return value;
    }
  }

}
