import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router";

// Main Module Component
import { MainComponent } from "./home/main/main.component";
import { ContactComponent } from "./home/contact/contact.component";
import { TeamComponent } from "./home/team/team.component";
import { WorkshopComponent } from "./home/workshop/workshop.component";
import { EventComponent } from "./home/event/event.component";
import { RegisterComponent } from "./home/register/register.component";

// Auth Module Component
import { SigninComponent } from "./auth/signin/signin.component";
import { SignupComponent } from "./auth/signup/signup.component";
import { ResetComponent } from "./auth/reset/reset.component";
import { AuthService } from "./auth/auth.service";
import { AuthComponent } from "./auth/auth.component";

// Shared Component
import { Error404Component } from "./shared/error404/error404.component";

// Auth Gaurd
import { AuthGaurd } from "./auth/auth-gaurd.service";

const routes: Routes = [
    { path: '', component: MainComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'team', component: TeamComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'workshop/:name', component: WorkshopComponent },
    { path: 'event/:id', component: EventComponent },
    {
        path: 'auth', component: AuthComponent, children: [
            { path: 'signin', component: SigninComponent },
            { path: 'signup', component: SignupComponent },
            { path: 'reset', component: ResetComponent },
        ]
    },
    { path: '**', component: Error404Component }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {

}