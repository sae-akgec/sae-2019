import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { LandingComponent } from './landing/landing.component';
import { BlogsComponent } from './blogs/blogs.component';
import { EventComponent } from './event/event.component';
import { WorkshopComponent } from './workshop/workshop.component';
import { ContactComponent } from './contact/contact.component';
import { RegisterComponent } from './register/register.component';
import { BlogListComponent } from './blogs/blog-list/blog-list.component';
import { BlogDetailComponent } from './blogs/blog-detail/blog-detail.component';
import { LandingHeaderComponent } from './landing/landing-header/landing-header.component';
import { LandingAboutComponent } from './landing/landing-about/landing-about.component';
import { LandingContactComponent } from './landing/landing-contact/landing-contact.component';
import { LandingWorkshopsComponent } from './landing/landing-workshops/landing-workshops.component';
import { LandingEventsComponent } from './landing/landing-events/landing-events.component';
import { LandingBlogsComponent } from './landing/landing-blogs/landing-blogs.component';
import { LandingTestimonialComponent } from './landing/landing-testimonial/landing-testimonial.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [NavbarComponent, FooterComponent, LandingComponent, BlogsComponent, EventComponent, WorkshopComponent, ContactComponent, RegisterComponent, BlogListComponent, BlogDetailComponent, LandingHeaderComponent, LandingAboutComponent, LandingContactComponent, LandingWorkshopsComponent, LandingEventsComponent, LandingBlogsComponent, LandingTestimonialComponent, HomeComponent],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
