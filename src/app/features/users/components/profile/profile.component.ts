import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  imports:[RouterLink],
  standalone:true,
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  // Your component logic here
}
