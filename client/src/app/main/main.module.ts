import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeHeaderComponent } from './home/home-header/home-header.component';
import { HomeTutorialComponent } from './home/home-tutorial/home-tutorial.component';
import { HomeAboutComponent } from './home/home-about/home-about.component';
import { FaqsComponent } from './faqs/faqs.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { TermsComponent } from './terms/terms.component';
import { AboutComponent } from './about/about.component';
import { ReachComponent } from './reach/reach.component';
import { ContactComponent } from './contact/contact.component';
import { MainComponent } from './main.component';
import { MainRoutingModule } from './main-routing.module';

// Material imports
import { MatCardModule } from '@angular/material/card';
import { BookingComponent } from './booking/booking.component';
import { HomeFeaturesComponent } from './home/home-features/home-features.component';

import { HomeCtaComponent } from './home/home-cta/home-cta.component';
import { MainService } from './main.service';

import { SupraComponent } from './supra/supra.component';
import { EfficycleComponent } from './efficycle/efficycle.component';
import { EfficarComponent } from './efficar/efficar.component';




@NgModule({
  declarations: [HomeComponent, NavbarComponent, FooterComponent, HomeHeaderComponent, HomeTutorialComponent, HomeAboutComponent, FaqsComponent, PrivacyComponent, TermsComponent, AboutComponent, ReachComponent, ContactComponent, MainComponent, BookingComponent, HomeFeaturesComponent, HomeCtaComponent,  SupraComponent, EfficycleComponent, EfficarComponent],
  imports: [
    CommonModule, MainRoutingModule, MatCardModule, FormsModule, ReactiveFormsModule,
  ],
  providers: [MainService]
})
export class MainModule { }