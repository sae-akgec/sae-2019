import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Error404Component } from "./error404/error404.component";

@NgModule({
  declarations: [
    Error404Component
  ],
  imports: [
    CommonModule, HttpClientModule
  ],
  providers: [],
  exports:[
      Error404Component
  ]
})
export class SharedModule { }
