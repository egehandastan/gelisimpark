import { Pipe, PipeTransform } from '@angular/core';
import { Cards } from '../cards/cards';



@Pipe({
  name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {

  transform(value: Cards[], filterText?:any): Cards[] {
  filterText = filterText?filterText.toLocaleLowerCase():null

    return filterText?value.filter((c:Cards)=>c.name
    .toLocaleLowerCase().indexOf(filterText)!==-1):value;
  }

}
