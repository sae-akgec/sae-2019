import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { BlogComponent } from './blog/blog.component';
import { NewBlogComponent } from './blog/new-blog/new-blog.component';
import { EditBlogComponent } from './blog/edit-blog/edit-blog.component';
import { ListBlogComponent } from './blog/list-blog/list-blog.component';
import { UsersComponent } from './users/users.component';
import { ListUsersComponent } from './users/list-users/list-users.component';
import { EditUsersComponent } from './users/edit-users/edit-users.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminRoutingModule } from "./admin-routing.module";


@NgModule({
  declarations: [AdminComponent, BlogComponent, NewBlogComponent, EditBlogComponent, ListBlogComponent, UsersComponent, ListUsersComponent, EditUsersComponent, DashboardComponent],
  imports: [
    CommonModule, AdminRoutingModule
  ]
})
export class AdminModule { }
