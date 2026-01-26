
import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { PracticeAreasComponent } from './pages/practice-areas/practice-areas.component';
import { LeadershipComponent } from './pages/leadership/leadership.component';
import { InsightsComponent } from './pages/insights/insights.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ExpertiseComponent } from './pages/expertise/expertise.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Home — Law Firm' },
  { path: 'about', component: AboutComponent, title: 'About — Law Firm' },
  { path: 'practice-areas', component: PracticeAreasComponent, title: 'Practice Areas — Law Firm' },
  { path: 'leadership', component: LeadershipComponent, title: 'Leadership — Law Firm' },
  { path: 'insights', component: InsightsComponent, title: 'Insights — Law Firm' },
  { path: 'contact', component: ContactComponent, title: 'Contact — Law Firm' },
  { path: 'expertise', component: ExpertiseComponent, title: 'Expertise — Law Firm' },
  { path: '**', redirectTo: '' }
];
