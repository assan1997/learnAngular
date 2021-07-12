import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'upercase'
})
export class PipePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    console.log(args.length)
    return value.toUpperCase() ;
  }

}
