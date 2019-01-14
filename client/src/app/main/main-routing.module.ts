import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main.component';
import { LandingComponent } from './landing/landing.component';
import { BlogsComponent } from "./blogs/blogs.component";
import { BlogListComponent } from './blogs/blog-list/blog-list.component';
import { BlogDetailComponent } from './blogs/blog-detail/blog-detail.component';

const routes: Routes = [
    {path:'', component:MainComponent, children:[
        {path:'', component:LandingComponent},
        ,
      { path: 'blogs', component: BlogsComponent, children:[
        {path: '', component:BlogListComponent},
        {path: ':id', component:BlogDetailComponent}]
      },
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }