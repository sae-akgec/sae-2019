import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from "./admin.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { BlogComponent } from "./blog/blog.component";
import { NewBlogComponent } from './blog/new-blog/new-blog.component';

const routes: Routes = [
    {path:"admin", component:AdminComponent, children:[
        {path:"", component:DashboardComponent},
        {path:"blog",component:BlogComponent,children:[
          {path:"new",component:NewBlogComponent}
      ]},
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
