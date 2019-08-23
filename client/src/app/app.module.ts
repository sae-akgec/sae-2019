import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainModule } from "./main/main.module";
import { AuthModule } from './auth/auth.module';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminModule } from './admin/admin.module';
import { BlogService } from "./blogs/blog.service";
import { BlogsComponent } from './blogs/blogs.component';
import { BlogsListComponent } from './blogs/blogs-list/blogs-list.component';
import { BlogsDetailComponent } from './blogs/blogs-detail/blogs-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    BlogsComponent,
    BlogsListComponent,
    BlogsDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, FormsModule, ReactiveFormsModule, 
    MainModule, AuthModule, AdminModule,
    BrowserAnimationsModule, HttpClientModule, 
    SharedModule
  ],
  providers: [BlogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
