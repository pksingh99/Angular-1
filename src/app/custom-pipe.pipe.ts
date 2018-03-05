import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customPipe'
})
export class CustomPipePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let lim = parseInt(args);
    return Math.floor((Math.random() * lim) + 1);
  }

}
