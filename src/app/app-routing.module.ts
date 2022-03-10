import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './error-page/error-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { LoungeComponent } from './lounge/lounge.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MyListComponent } from './my-list/my-list.component';

const routes: Routes = [
  {path: '', component: LoginPageComponent},
  {path: 'login-page', component: LoginPageComponent},
  {path: 'lounge', component: LoungeComponent},
  {path: 'my-list', component: MyListComponent},
  {path: 'movie/id/:id', component: MovieDetailComponent},
  

  {path: 'not-found', component: ErrorPageComponent}, // Aqui defino uma nova rota que irá existir.
  {path: '**', redirectTo: '/not-found', pathMatch: 'full'},
   // Aqui digo que se o URL digitado não existir na minha aplicação, então faz o redirecionamento para a rota /not-found

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
