import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  imports:[RouterLink],
  standalone:true,
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  // Your component logic here
}
