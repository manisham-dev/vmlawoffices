
import { Component } from '@angular/core';

@Component({
  selector: 'app-practice',
  standalone: true,
  template: `
    <section class="section container">
      <h1 class="section-title">Practice Areas</h1>
      <ul>
        <li>Arbitration</li>
        <li>Litigation</li>
        <li>Corporate Advisory</li>
      </ul>
    </section>
  `
})
export class PracticeComponent {}
