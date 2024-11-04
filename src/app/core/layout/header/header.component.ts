import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AsyncPipe, NgIf } from '@angular/common';
import { IfAuthenticatedDirective } from '../../auth/if-authenticated.directive';
import { TranslocoService } from '@jsverse/transloco';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-layout-header',
  templateUrl: './header.component.html',
  imports: [
    RouterLinkActive,
    RouterLink,
    AsyncPipe,
    NgIf,
    IfAuthenticatedDirective,
    MatIconModule,
  ],
  standalone: true,
})
export class HeaderComponent {
  currentLang: string;
  username: string = 'Username'; // Replace this with a dynamic value

  constructor(private translocoService: TranslocoService) {
    this.currentLang = this.translocoService.getActiveLang();
  }

  switchLanguage() {
    this.currentLang = this.currentLang === 'en' ? 'ar' : 'en';
    this.translocoService.setActiveLang(this.currentLang);
  }

  getTranslation(key: string): string {
    return this.translocoService.translate(key);
  }
}
