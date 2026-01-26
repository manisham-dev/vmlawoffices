
import { Component } from '@angular/core';

@Component({
  selector: 'app-practice-areas',
  standalone: true,
  template: `
    <section class="section">
      <div class="container">
        <h2 class="section-title">Practice Areas</h2>
        <div class="grid">
          <article class="card"><h3>Arbitration</h3><p>Institutional and ad-hoc proceedings, enforcement, and set-aside actions.</p></article>
          <article class="card"><h3>Regulatory</h3><p>Sectoral compliance and investigations.</p></article>
          <article class="card"><h3>Tax & Insolvency</h3><p>Complex restructuring and appellate litigation.</p></article>
        </div>
      </div>
    </section>
  `,
  styles: [`.grid { display:grid; grid-template-columns: repeat(3,1fr); gap:1rem; }`,
           `@media (max-width: 900px) { .grid { grid-template-columns: 1fr; } }`]
})
export class PracticeAreasComponent {}
