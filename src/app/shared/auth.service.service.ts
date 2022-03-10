import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userLoggedIn = new Subject<boolean>();
  // -> Os dados contidos aqui serão reencaminhados para app.component.ts e header.component.ts

  userLoggedOut = new Subject<boolean>();
  // -> Os dados contidos aqui serão reencaminhados para lounge.component.ts, my-list e movie-detail.ts

}