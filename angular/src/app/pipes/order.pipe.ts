import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'order',
  standalone: true,
})
export class OrderPipe implements PipeTransform {
  transform(arr: any[], field: string, isAsc: boolean): any[] {
    if (!arr || !field) return arr;

    const orderedData = arr.sort((a, b) => {
      //  a === b ? true  : false ;
      return isAsc ? a[field] - b[field] : b[field] - a[field];
    });
    return orderedData;
  }
}
