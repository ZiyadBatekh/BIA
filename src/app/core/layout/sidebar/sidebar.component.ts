import { NgClass, NgForOf } from '@angular/common';
import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [MatIconModule, NgClass,NgForOf, RouterLink],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  activeLink: string = 'home'; // Default active link

  setActiveLink(link: string) {
    this.activeLink = link; // Set the clicked link as active
  }
}
