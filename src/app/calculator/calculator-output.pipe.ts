import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'calculatorOutput',
  pure: true
})
export class CalculatorOutputPipe implements PipeTransform {

  transform(value: string, prefix: string): string {
    return `${ prefix } ${value}`;
  }

}
