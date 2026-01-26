
import { Component } from '@angular/core';

@Component({
  selector: 'app-awards',
  standalone: true,
  template: `
    <section class="section">
      <div class="container">
        <h2 class="section-title">Recognition</h2>
        <div class="grid">
          <article class="card"><h3>Industry Rankings</h3><p>Recognized by leading legal directories for dispute resolution.</p></article>
          <article class="card"><h3>Client Service</h3><p>Awards for responsiveness and outcomes.</p></article>
          <article class="card"><h3>Thought Leadership</h3><p>Regular contributors to legal journals and events.</p></article>
        </div>
      </div>
    </section>
  `,
  styles: [`.grid { display:grid; grid-template-columns: repeat(3,1fr); gap:1rem; }`,
           `@media (max-width: 900px) { .grid { grid-template-columns: 1fr; } }`]
})
export class AwardsComponent {}
