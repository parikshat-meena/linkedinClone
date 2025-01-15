import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'square',
  standalone: true,
})
export class SquarePipe implements PipeTransform {
  transform(value: number, ...args: unknown[]): number {
    if (!value) {
      return value;
    }
    return value * value;
  }
}
