import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'numberToDate' })
export class NumberDatePipe implements PipeTransform {
    transform(value: number, s: string = '-'): string {
        const str = value + '';
        return str.slice(0, 4) + s + str.slice(4, 6) + s + str.slice(6, 8);
    }
}
