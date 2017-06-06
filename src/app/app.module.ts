import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NavComponent } from './homepage/nav/nav.component';
import { UserpageComponent } from './userpage/userpage.component';
import { GeneralNavComponent } from './userpage/general-nav/general-nav.component';
import { BioComponent } from './userpage/bio/bio.component';
import { ProfileBodyComponent } from './userpage/profile-body/profile-body.component';
import { AllResearchComponent } from './all-research/all-research.component';
import { InterviewComponent } from './interview/interview.component';
import { InterviewTypesComponent } from './interview/interview-types/interview-types.component';
import { InterviewTipsComponent } from './interview/interview-tips/interview-tips.component';
import { UnstructuredInterviewComponent } from './interview/interview-types/unstructured-interview/unstructured-interview.component';
import { SemiStructuredInterviewComponent } from './interview/interview-types/semi-structured-interview/semi-structured-interview.component';
import { StructuredInterviewComponent } from './interview/interview-types/structured-interview/structured-interview.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { OverviewSemiStructuredInterviewComponent } from './interview/overview-semi-structured-interview/overview-semi-structured-interview.component';
import { SemiStructuredOverviewBodyComponent } from './interview/overview-semi-structured-interview/semi-structured-overview-body/semi-structured-overview-body.component';
import { SemiStructuredOverviewTabComponent } from './interview/overview-semi-structured-interview/semi-structured-overview-body/semi-structured-overview-tab/semi-structured-overview-tab.component';
import { SemiStructuredQuestionFormatComponent } from './interview/overview-semi-structured-interview/semi-structured-overview-body/semi-structured-question-format/semi-structured-question-format.component';

const appRoutes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'user', component: UserpageComponent },
  { path: 'research', component: AllResearchComponent},
  { path: 'research/interviews', component: InterviewComponent },
  { path: 'research/interviews/semi-structured', component: OverviewSemiStructuredInterviewComponent }

]

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    NavComponent,
    UserpageComponent,
    GeneralNavComponent,
    BioComponent,
    ProfileBodyComponent,
    AllResearchComponent,
    InterviewComponent,
    InterviewTypesComponent,
    InterviewTipsComponent,
    UnstructuredInterviewComponent,
    SemiStructuredInterviewComponent,
    StructuredInterviewComponent,
    SideNavComponent,
    OverviewSemiStructuredInterviewComponent,
    SemiStructuredOverviewBodyComponent,
    SemiStructuredOverviewTabComponent,
    SemiStructuredQuestionFormatComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
