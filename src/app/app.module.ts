import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoungeComponent } from './lounge/lounge.component';
import { SearchFiltersComponent } from './lounge/search-filters/search-filters.component';

import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { MyListComponent } from './my-list/my-list.component';
import { moviesService } from './movies.service';
import { ErrorPageComponent } from './error-page/error-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TrailerModalComponent } from './shared/trailer-modal/trailer-modal.component';
import { SafePipe } from './shared/safe.pipe';
import { LoginPageComponent } from './login-page/login-page.component';
import { AuthService } from './shared/auth.service.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoungeComponent,
    SearchFiltersComponent,
    MovieDetailComponent,
    FooterComponent,
    MyListComponent,
    ErrorPageComponent,
    TrailerModalComponent,
    SafePipe,
    LoginPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [moviesService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
