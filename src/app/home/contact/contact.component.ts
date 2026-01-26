
import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  template: `
    <section id="contact" class="section">
      <div class="container">
        <h2 class="section-title">Contact</h2>
        <div class="card">
          <p class="subtle">Email: contact@yourlawfirm.example • Phone: +91-00000 00000</p>
          <form class="contact-form" (submit)="onSubmit($event)">
            <div class="row">
              <input name="name" placeholder="Your name" required />
              <input name="email" type="email" placeholder="Email" required />
            </div>
            <textarea name="msg" rows="4" placeholder="How can we help?" required></textarea>
            <button class="btn-primary" type="submit">Send</button>
          </form>
        </div>
      </div>
    </section>
  `,
  styles: [
    `.contact-form { display:flex; flex-direction: column; gap: .75rem; }`,
    `.row { display:grid; grid-template-columns: 1fr 1fr; gap: .75rem; }`,
    `input, textarea { padding:.75rem; border-radius:8px; border:1px solid rgba(255,255,255,.12); background:#0c0f13; color:#e9edf1; }`,
    `@media (max-width: 700px) { .row { grid-template-columns: 1fr; } }`
  ]
})
export class ContactComponent {
  onSubmit(e: Event) {
    e.preventDefault();
    alert('Thanks! We will get back to you.');
  }
}
