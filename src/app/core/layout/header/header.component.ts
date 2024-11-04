import { Component, Inject, Renderer2 } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AsyncPipe, NgIf } from '@angular/common';
import { IfAuthenticatedDirective } from '../../auth/if-authenticated.directive';
import { TranslocoService } from '@jsverse/transloco';
import { MatIconModule } from '@angular/material/icon';
import { DOCUMENT } from '@angular/common';

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
  currentLang = 'en';

  constructor(
    private translocoService: TranslocoService,
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document
  ) {
    this.updateDirection();
  }

  switchLanguage() {
    this.currentLang = this.currentLang === 'en' ? 'ar' : 'en';
    this.translocoService.setActiveLang(this.currentLang);
    this.updateDirection();
  }

  updateDirection() {
    if (this.currentLang === 'ar') {
      this.renderer.addClass(this.document.body, 'rtl');
      this.renderer.removeClass(this.document.body, 'ltr');
    } else {
      this.renderer.addClass(this.document.body, 'ltr');
      this.renderer.removeClass(this.document.body, 'rtl');
    }
  }

  getTranslation(key: string): string {
    return this.translocoService.translate(key);
  }
}
