import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { FacebookGuard } from './guards/facebook.guard';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { WatchComponent } from "./components/watch/watch.component";
import { PostComponent } from './components/post/post.component';
import { ProfileComponent } from './components/profile/profile.component';
import { EditInfoComponent } from './components/edit-info/edit-info.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [FacebookGuard]
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'watch',
    component: WatchComponent,
  },
  {
    path: 'login', component: LoginComponent,
  },
  {
    path: 'register', component: RegisterComponent,
  },
  {
    path: 'post', component: PostComponent,
  },
  {
    path: 'profile/:id', component: ProfileComponent,
  },
  {
    path: 'editInfo', component: EditInfoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
