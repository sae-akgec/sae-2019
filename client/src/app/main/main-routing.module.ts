import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { FaqsComponent } from './faqs/faqs.component';
import { ContactComponent } from './contact/contact.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { TermsComponent } from './terms/terms.component';
import { BlogsComponent } from '../blogs/blogs.component';
import { BlogsListComponent } from '../blogs/blogs-list/blogs-list.component';
import { BlogsDetailComponent } from '../blogs/blogs-detail/blogs-detail.component';
import { SupraComponent } from './supra/supra.component';
import { EfficarComponent } from './efficar/efficar.component';
import { EfficycleComponent } from './efficycle/efficycle.component';
import { HomeTutorialComponent } from './home/home-tutorial/home-tutorial.component';

const routes: Routes = [
    {path:"", component:MainComponent, children:[
        {path:"", component:HomeComponent},
        {path:"registration", component:AboutComponent},
        {path:"faqs", component:FaqsComponent},
        {path:"contact", component:ContactComponent},
        {path:"efficar",component:EfficarComponent},
        {path:"efficycle",component:EfficycleComponent},
        {path:"supra",component :SupraComponent},
        {path:"privacy", component: PrivacyComponent},
        {path:"terms", component:TermsComponent},
       
        {path: 'blogs', component:BlogsComponent, children: [
          {path: '', component:BlogsListComponent},
          {path: ":id", component:BlogsDetailComponent}
        ]}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
