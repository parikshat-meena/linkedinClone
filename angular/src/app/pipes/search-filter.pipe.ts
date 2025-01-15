import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter',
  standalone: true,
})
export class SearchFilterPipe implements PipeTransform {
  transform(arr: any[], searchValue: string, field: string): any[] {
    if (!arr || !searchValue) {
      return arr;
    }
    searchValue = searchValue.toLowerCase();

    const filterData = arr.filter((item) => {
      // {id: 1 , fname : 'mansi' , role : 'developer'}
      return (
        item[field]?.toLowerCase().includes(searchValue) ||
        item['role']?.toLowerCase().includes(searchValue)
      );
      // mansi.include(man) // true
      // prathamesh.includes(man) // false
    });

    // [mansi]
    // console.log();
    return filterData;
  }
}
