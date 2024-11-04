import { NgClass, NgForOf } from '@angular/common';
import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [MatIconModule, NgClass,NgForOf, RouterLink, TranslocoModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  currentLang: string;
  activeLink: string = '';
  menuItems = [
    { key: 'home', link: '/home', icon: 'home' },
    { key: 'plans', link: '/plans', icon: 'view_list' },
    { key: 'operations', link: '/operations', icon: 'build' },
    { key: 'bia_analysis', link: '/bia-analysis', icon: 'assessment' },
    { key: 'risks', link: '/risks', icon: 'warning' },
    { key: 'institution_data', link: '/institution-data', icon: 'account_balance' },
    { key: 'users', link: '/users', icon: 'group' },
    { key: 'reports', link: '/reports', icon: 'description' },
    { key: 'institutions', link: '/institutions', icon: 'business' },
    { key: 'awareness_training', link: '/awareness-training', icon: 'school' },
    { key: 'notifications', link: '/notifications', icon: 'notifications' },
    { key: 'task_management', link: '/task-management', icon: 'assignment' },
    { key: 'settings', link: '/settings', icon: 'settings' }
  ];

  constructor(private translocoService: TranslocoService) {
    this.currentLang = this.translocoService.getActiveLang();
  }

 

  setActiveLink(key: string) {
    this.activeLink = key;
  }
}
