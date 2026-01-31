import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { PracticeAreasComponent } from './pages/practice-areas/practice-areas.component';
import { LeadershipComponent } from './pages/leadership/leadership.component';
import { InsightsComponent } from './pages/insights/insights.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ExpertiseComponent } from './pages/expertise/expertise.component';

// Import sub‑components for each practice area
import { ArbitrationComponent } from './pages/practice-areas/arbitration/arbitration.component';
import { CommercialLitigationComponent } from './pages/practice-areas/commercial-litigation/commercial-litigation.component';
import { CompetitionLawComponent } from './pages/practice-areas/competition-law/competition-law.component';
import { CorporateInsolvencyComponent } from './pages/practice-areas/corporate-insolvency/corporate-insolvency.component';
import { ConstitutionalLawComponent } from './pages/practice-areas/constitutional-law/constitutional-law.component';
import { CriminalLawComponent } from './pages/practice-areas/criminal-law/criminal-law.component';
import { EnvironmentalLawComponent } from './pages/practice-areas/environmental-law/environmental-law.component';
import { RegulatoryLitigationComponent } from './pages/practice-areas/regulatory-litigation/regulatory-litigation.component';
import { MediationComponent } from './pages/practice-areas/mediation/mediation.component';
import { SecuritiesLawComponent } from './pages/practice-areas/securities-law/securities-law.component';
import { TaxComponent } from './pages/practice-areas/tax/tax.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Home — Law Firm' },
  { path: 'about', component: AboutComponent, title: 'About — Law Firm' },
  {
    path: 'practice-areas',
    component: PracticeAreasComponent,
    title: 'Practice Areas — Law Firm',
    children: [
      { path: 'arbitration', component: ArbitrationComponent, title: 'Arbitration — Law Firm' },
      { path: 'commercial-litigation', component: CommercialLitigationComponent, title: 'Commercial Litigation — Law Firm' },
      { path: 'competition-law', component: CompetitionLawComponent, title: 'Competition Law — Law Firm' },
      { path: 'corporate-insolvency', component: CorporateInsolvencyComponent, title: 'Corporate & Insolvency Laws — Law Firm' },
      { path: 'constitutional-law', component: ConstitutionalLawComponent, title: 'Constitutional Law — Law Firm' },
      { path: 'criminal-law', component: CriminalLawComponent, title: 'Criminal Law — Law Firm' },
      { path: 'environmental-law', component: EnvironmentalLawComponent, title: 'Environmental Law — Law Firm' },
      { path: 'regulatory-litigation', component: RegulatoryLitigationComponent, title: 'Regulatory Litigation — Law Firm' },
      { path: 'mediation', component: MediationComponent, title: 'Mediation — Law Firm' },
      { path: 'securities-law', component: SecuritiesLawComponent, title: 'Securities Law — Law Firm' },
      { path: 'tax', component: TaxComponent, title: 'Tax — Law Firm' }
    ]
  },
  { path: 'leadership', component: LeadershipComponent, title: 'Leadership — Law Firm' },
  { path: 'insights', component: InsightsComponent, title: 'Insights — Law Firm' },
  { path: 'contact', component: ContactComponent, title: 'Contact — Law Firm' },
  { path: 'expertise', component: ExpertiseComponent, title: 'Expertise — Law Firm' },
  { path: '**', redirectTo: '' }
];
