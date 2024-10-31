import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  imports:[RouterLink],
  standalone:true,
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent {
  // Your component logic here
}
