
import { Component } from '@angular/core';
import { HeroComponent } from './hero/hero.component';
import { ExpertiseComponent } from './expertise/expertise.component';
import { PracticeAreasComponent } from './practice-areas/practice-areas.component';
import { LeadersComponent } from './leaders/leaders.component';
import { AwardsComponent } from './awards/awards.component';
import { InsightsComponent } from './insights/insights.component';
import { ContactComponent } from './contact/contact.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, ExpertiseComponent, PracticeAreasComponent, LeadersComponent, AwardsComponent, InsightsComponent, ContactComponent],
  template: `
    <app-hero />
    <app-expertise />
    <app-practice-areas />
    <app-leaders />
    <app-awards />
    <app-insights />
    <app-contact />
  `
})
export class HomeComponent {}
