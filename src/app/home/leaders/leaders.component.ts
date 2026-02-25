
import { Component } from '@angular/core';

@Component({
  selector: 'app-leaders',
  standalone: true,
  template: `
    <section class="section">
      <div class="container">
        <h2 class="section-title">Leadership</h2>
        <div class="grid">
          <article class="card"><h3>Managing Partner</h3><p>Seasoned counsel leading complex disputes.</p></article>
          <article class="card"><h3>Founding Partner</h3><p>Decades of appellate advocacy and institution building.</p></article>
          <article class="card"><h3>Partner</h3><p>Focus on commercial litigation and arbitration.</p></article>
        </div>
      </div>
    </section>
  `,
  styles: [`.grid { display:grid; grid-template-columns: repeat(3,1fr); gap:1rem; }`,
           `@media (max-width: 1024px) { .grid { grid-template-columns: repeat(2,1fr); } }`,
           `@media (max-width: 600px) { .grid { grid-template-columns: 1fr; } }`]
})
export class LeadersComponent {}
