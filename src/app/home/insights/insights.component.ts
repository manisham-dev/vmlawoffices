
import { Component } from '@angular/core';

@Component({
  selector: 'app-insights',
  standalone: true,
  template: `
    <section class="section">
      <div class="container">
        <h2 class="section-title">Insights</h2>
        <div class="grid">
          <article class="card"><h3>Article Title</h3><p>Brief summary of a recent development.</p></article>
          <article class="card"><h3>Case Note</h3><p>Key takeaways from an appellate ruling.</p></article>
          <article class="card"><h3>Event</h3><p>Panel discussion on arbitration trends.</p></article>
        </div>
      </div>
    </section>
  `,
  styles: [`.grid { display:grid; grid-template-columns: repeat(3,1fr); gap:1rem; }`,
           `@media (max-width: 1024px) { .grid { grid-template-columns: repeat(2,1fr); } }`,
           `@media (max-width: 600px) { .grid { grid-template-columns: 1fr; } }`]
})
export class InsightsComponent {}
