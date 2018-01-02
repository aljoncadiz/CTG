import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginformComponent } from './loginform/loginform.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserService } from './user.service';
import { AuthguardGuard } from './authguard.guard';
import { UsersComponent } from './users/users.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { TrainingsComponent } from './dashboard/trainings/trainings.component';
import { CoursesComponent } from './dashboard/courses/courses.component';
import { DashboardGuard } from './dashboard/dashboard.guard';

const appRoutes: Routes = [
  {
    path: '',
    component: LoginformComponent
  },
  {
    path: 'users',
    component: UsersComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {
        path: 'trainings',
        component: TrainingsComponent

      },
      {
        path: 'courses',
        component: CoursesComponent
      }
    ]
  },
  {
    path: '**',
    component: NotfoundComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginformComponent,
    FooterComponent,
    DashboardComponent,
    UsersComponent,
    TrainingsComponent,
    CoursesComponent,
    NotfoundComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule
  ],
  providers: [UserService, AuthguardGuard, DashboardGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
