
import { Component } from '@angular/core';

@Component({
  selector: 'app-practice-areas',
  standalone: true,
  template: `
    
  `,
  styles: [`.grid { display:grid; grid-template-columns: repeat(3,1fr); gap:1rem; }`,
           `@media (max-width: 900px) { .grid { grid-template-columns: 1fr; } }`]
})
export class PracticeAreasComponent {}
