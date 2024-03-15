import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'format'
})
export class FormatPipe implements PipeTransform {

  // Format pipe is like C# string format
  // Using E.x. {{ '{0}, I am {1}' | format: 'Hello': 'Taylor'}} = 'Hello, I am Taylor'
  transform(value: string, ...args: string[]): string {
    if (args.length > 0) {
      let result = value;

      for (let i = 0; i < args.length; i++) {
        const regex = new RegExp('\\{' + i + '\\}');
        result = result.replace(regex, args[i]);
      }

      return result;
    }

    return value;
  }
}