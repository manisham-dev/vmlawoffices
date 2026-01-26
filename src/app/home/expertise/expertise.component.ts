
import { Component } from '@angular/core';

@Component({
  selector: 'app-expertise',
  standalone: true,
  template: `
    <section class="section">
      <div class="container">
        <h2 class="section-title">Expertise</h2>
        <p class="subtle">End-to-end support across disputes, corporate advisory, and cross-border matters.</p>
        <div class="grid">
          <article class="card"><h3>Litigation</h3><p>High-stakes advocacy across courts and tribunals.</p></article>
          <article class="card"><h3>Arbitration & ADR</h3><p>Domestic and international arbitration with pragmatic strategies.</p></article>
          <article class="card"><h3>Corporate & Commercial</h3><p>Transactions, regulatory, and governance advisory.</p></article>
        </div>
      </div>
    </section>
  `,
  styles: [
    `.grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; margin-top: 1rem; }`,
    `@media (max-width: 900px) { .grid { grid-template-columns: 1fr; } }`
  ]
})
export class ExpertiseComponent {}
