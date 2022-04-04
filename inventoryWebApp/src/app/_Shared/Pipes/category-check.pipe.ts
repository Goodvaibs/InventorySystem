import { Category } from 'src/app/_Shared/Constants/Category';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'categoryCheck'
})
export class CategoryCheckPipe implements PipeTransform {

  category = Category;

  transform(value: unknown, ...args: unknown[]): unknown {
    console.log(value);
    let cat = this.category.find(cat => (cat.value === value) ? cat.name : '');
    return cat?.name
  }

}
