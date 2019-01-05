import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule,Optional, SkipSelf } from '@angular/core';
import { NavbarComponent } from "./navbar/navbar.component";
import { FooterComponent } from "./footer/footer.component";
import { RouterModule } from "@angular/router";
import { CoreService } from "./core.service";
import { AuthService } from '../auth/auth.service';

@NgModule({
  declarations: [
     NavbarComponent, FooterComponent
  ],
  imports: [
    CommonModule, RouterModule
  ],
  providers: [CoreService,AuthService],
  exports:[NavbarComponent, FooterComponent]
})
export class CoreModule { }
