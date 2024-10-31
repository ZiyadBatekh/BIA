import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'avatarUrl',
})
export class AvatarUrlPipe implements PipeTransform {
  transform(value: string) {
    const imageUrlRegex = /\.(jpeg|jpg|gif|png)$/;
    if (imageUrlRegex.test(value)) {
      // Convert the value to a string and return it
      return String(value);
    } else {
      // If value is not a valid image URL, return the default image URL
      return 'assets/img/depositphotos_35716051-stock-illustration-user-icon-vector.jpg';
    }
  }
}
