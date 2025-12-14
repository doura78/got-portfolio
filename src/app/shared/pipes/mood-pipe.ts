import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mood',
})
export class MoodPipe implements PipeTransform {

  transform(value: string): string {
    if (!value)
      return '';
    return value + ('🐉');
  }

}
