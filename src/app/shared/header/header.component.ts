
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '(document:click)': 'onDocumentClick($event)',
  },
})
export class HeaderComponent {
  menuOpen = signal(false);
  dropdownOpen = signal(false);

  toggleMenu() {
    this.menuOpen.update((v) => !v);
    if (!this.menuOpen()) {
      this.dropdownOpen.set(false);
    }
  }

  closeMenu() {
    this.menuOpen.set(false);
    this.dropdownOpen.set(false);
  }

  toggleDropdown(event: Event) {
    event.preventDefault();
    event.stopPropagation();
    this.dropdownOpen.update((v) => !v);
  }

  onDocumentClick(event: Event) {
    const target = event.target as HTMLElement;
    if (!target.closest('.navbar')) {
      this.closeMenu();
    } else if (!target.closest('.has-dropdown')) {
      this.dropdownOpen.set(false);
    }
  }
}
