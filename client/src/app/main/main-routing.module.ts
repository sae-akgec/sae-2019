import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main.component';
import { LandingComponent } from './landing/landing.component';
import { BlogsComponent } from "./blogs/blogs.component";
import { BlogListComponent } from './blogs/blog-list/blog-list.component';
import { BlogDetailComponent } from './blogs/blog-detail/blog-detail.component';
import { TeamComponent } from "./team/team.component";
import { WorkshopComponent } from './workshop/workshop.component';
import { EventComponent } from './event/event.component';
import { RegisterComponent } from './register/register.component';
import { ContactComponent } from './contact/contact.component';
import { AacarComponent } from './aacar/aacar.component';

const routes: Routes = [
    {path:'', component:MainComponent, children:[
      {path:'', component:LandingComponent},
      { path: 'blogs', component: BlogsComponent, children:[
        {path: '', component:BlogListComponent},
        {path: ':id', component:BlogDetailComponent}]
      },
      {path: 'team', component:TeamComponent},
      {path: 'workshops/:id', component:WorkshopComponent},
      {path: 'events/:id', component:EventComponent},
      {path:'workshops/:id/register', component:AacarComponent},
      {path:'contactus', component:ContactComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }