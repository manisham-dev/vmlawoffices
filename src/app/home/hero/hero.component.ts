
import { Component } from '@angular/core';
@Component({
  selector: 'app-hero',
  standalone: true,
  template: `
    <section class="section hero">
      <div class="container hero__inner">
        <div class="hero__copy">
          <h1>With You in Every Challenge</h1>
          <p class="subtle">Strategic counsel for complex disputes and transactions—delivered with precision and integrity.</p>
          <div class="hero__cta">
            <a class="btn-primary" href="#contact">Consult with us</a>
          </div>
        </div>
        <div class="hero__visual" aria-hidden="true"></div>
      </div>
    </section>
  `,
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {}
