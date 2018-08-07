import { UserServiceService } from './user-service.service';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router'
import { ToastModule } from 'ng2-toastr/ng2-toastr';

import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NavComponent } from './homepage/nav/nav.component';
import { UserpageComponent } from './userpage/userpage.component';
import { GeneralNavComponent } from './userpage/general-nav/general-nav.component';
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
import { UserBioComponent } from './userpage/profile-body/user-bio/user-bio.component';
import { CreateProjectComponent } from './userpage/profile-body/create-project/create-project.component';
import { FeaturedArticleComponent } from './userpage/profile-body/create-project/featured-article/featured-article.component';
import { LowerNavComponent } from './lower-nav/lower-nav.component';
import { FromScratchComponent } from './userpage/profile-body/from-scratch/from-scratch.component';
import { CreateSemistructureComponent } from './interview/overview-semi-structured-interview/semi-structure-overview-body/create-semistructure/create-semistructure.component';
import { SemistructureConfidentialityComponent } from './interview/overview-semi-structured-interview/semi-structure-overview-body/create-semistructure/semistructure-confidentiality/semistructure-confidentiality.component';
import { CreateSemistructureQuestionsComponent } from './interview/overview-semi-structured-interview/semi-structure-overview-body/create-semistructure/create-semistructure-questions/create-semistructure-questions.component';
import { CreateSemistructureBiographicalComponent } from './interview/overview-semi-structured-interview/semi-structure-overview-body/create-semistructure/create-semistructure-biographical/create-semistructure-biographical.component';
import { AdaptiveComponent } from './adaptive/adaptive.component';

const appRoutes: Routes = [
  { path: '', component: HomepageComponent },
  {
    path: 'user', component: UserpageComponent, children: [
      { path: '', component: CreateProjectComponent },
      { path: 'new', component: FromScratchComponent }
    ]
  },
  { path: 'research', component: AllResearchComponent },
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
    UserBioComponent,
    CreateProjectComponent,
    FeaturedArticleComponent,
    LowerNavComponent,
    FromScratchComponent,
    CreateSemistructureComponent,
    SemistructureConfidentialityComponent,
    CreateSemistructureQuestionsComponent,
    CreateSemistructureBiographicalComponent,
    AdaptiveComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    ToastModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule
  ],
  providers: [UserServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
