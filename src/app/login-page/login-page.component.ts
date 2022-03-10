import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  @ViewChild('emailRef') userEmail: ElementRef;
  @ViewChild('passwordRef') userPassword: ElementRef;

  isLoading: boolean;

  userLogado: boolean;

  constructor(private myRouter: Router, private myAuthService: AuthService) { }

  ngOnInit(): void {
  this.isLoading = false;
  this.userLogado = false;

  }

  onLogin(){
    
    // Faço uma simulação de autenticação
    const emailInput = this.userEmail.nativeElement.value;
    const passwordInput = this.userPassword.nativeElement.value;
    this.isLoading = true;

    if(emailInput !== '' && passwordInput !== ''){
      setTimeout(() => {
      this.myRouter.navigate(['/lounge'])

      this.userLogado = true;

      this.myAuthService.userLoggedIn.next(this.userLogado);
       // Quero comunicar entre componentes, uso Subject no Auth-service (pasta shared).
              
      }, 2200);

    } else if(emailInput === '' || passwordInput === '') {

      setTimeout(() => {
        window.location.reload()
      }, 2200)

    }

  }

}
