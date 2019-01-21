import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ParticlesModule } from 'angular-particle';

import { MainComponent } from './main.component';

// Core components
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';


import { ContactComponent } from './contact/contact.component';
import { RegisterComponent } from './register/register.component';
import { EventComponent } from './event/event.component';
import { TeamComponent } from './team/team.component';
import { WorkshopComponent } from './workshop/workshop.component';

import { LandingComponent } from './landing/landing.component';
import { LandingHeaderComponent } from './landing/landing-header/landing-header.component';
import { LandingEventsComponent } from './landing/landing-events/landing-events.component';
import { LandingWorkshopsComponent } from './landing/landing-workshops/landing-workshops.component';
import { LandingBlogsComponent } from './landing/landing-blogs/landing-blogs.component';
import { LandingContactComponent } from './landing/landing-contact/landing-contact.component';
import { LandingAboutComponent } from './landing/landing-about/landing-about.component';

import { BlogsComponent } from './blogs/blogs.component';
import { BlogListComponent } from './blogs/blog-list/blog-list.component';
import { BlogDetailComponent } from './blogs/blog-detail/blog-detail.component';


import { MainRoutingModule } from "./main-routing.module";
import { LandingService } from './landing/landing-header/landing.service';

// Material Modules
import { MatButtonModule, MatCheckboxModule, MatInputModule, MatIconModule, MatSelectModule, MatOptionModule, MatFormFieldModule, MatStepperModule, MatCardModule } from '@angular/material';
import { MainService } from './main.service';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    ContactComponent,
    RegisterComponent,
    EventComponent,
    LandingComponent,
    TeamComponent,
    MainComponent,
    BlogsComponent,
    WorkshopComponent,
    BlogListComponent,
    BlogDetailComponent,
    LandingHeaderComponent,
    LandingEventsComponent,
    LandingWorkshopsComponent,
    LandingBlogsComponent,
    LandingContactComponent,
    LandingAboutComponent],
  imports: [
    CommonModule, MainRoutingModule, MatButtonModule, MatCheckboxModule, MatInputModule, MatIconModule,
     MatSelectModule, MatOptionModule, MatFormFieldModule, MatStepperModule, MatCardModule, HttpClientModule,
     RouterModule, FormsModule, ReactiveFormsModule, ParticlesModule,
  ],
  providers: [LandingService, MainService]
})
export class MainModule { }
